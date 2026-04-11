import React, { useEffect, useState } from "react";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import {
  IconButton,
  Box,
  Button,
  AppBar,
  Toolbar,
  styled,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Heart } from "lucide-react";
import ContentForm from "./ContentForm";
import AddIcon from "@mui/icons-material/Add";
import HeaderSearchBar from "./HeaderSearchBar";
import {
  ContentInputSchema,
  type ContentInputType,
} from "@repo/zod/schemas/variants/input/Content.input.ts";
import type { ContentPureType } from "@repo/zod/schemas/variants/pure/Content.pure.ts";

interface ContentManagementProps {
  viewState: ContentPureType | "new" | null;
  setViewState: React.Dispatch<
    React.SetStateAction<ContentPureType | "new" | null>
  >;
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  flexDirection: "column",
  alignItems: "stretch",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  minHeight: 128,
}));

export default function ContentManagement({
  viewState,
  setViewState,
}: ContentManagementProps) {
  const [rows, setRows] = useState<ContentPureType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRows = rows.filter((row) => {
    if (!searchQuery.trim()) return true;

    const targetFields = [row.title, row.url, row.content_owner];
    return targetFields.some((field) =>
      field?.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/content", {
          credentials: "include",
        });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setRows(data);
      } catch (error) {
        console.error("Failed to fetch content:", error);
      }
    };
    void fetchData();
  }, []);

  const handleDelete = async (row: ContentPureType) => {
    if (!window.confirm(`Are you sure you want to delete "${row.title}"?`))
      return;

    const { uuid } = row;

    try {
      const res = await fetch(`http://localhost:3000/content/delete/${uuid}`, {
        method: "POST",
        credentials: "include",
      });

      if (res.ok) {
        setRows((prev) => prev.filter((r) => r.uuid !== uuid));
        console.log(`Successfully deleted: ${uuid}`);
      } else {
        const errorData = await res.json().catch(() => ({}));
        console.error("Server rejected delete:", errorData);
      }
    } catch (error) {
      console.error("Network error during delete:", error);
    }
  };

  const toggleFavorite = async (formData: ContentInputType) => {
    try {
      const res = await fetch("http://localhost:3000/content/favorite", {
        method: "PATCH",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        const updatedRow = await res.json();
        setRows((prevRows) =>
          prevRows.map((r) => (r.uuid === updatedRow.uuid ? updatedRow : r)),
        );
      }
    } catch (error) {
      console.error("Failed to toggle favorite:", error);
    }
  };

  const handleSave = async (formData: ContentInputType) => {
    const isExisting = viewState !== "new" && viewState !== null;
    const uuid =
      isExisting ? (viewState as ContentPureType).uuid : crypto.randomUUID();

    const parsed = ContentInputSchema.parse({
      ...formData,
      uuid,
    });

    const url =
      isExisting ?
        `http://localhost:3000/content/edit/${uuid}`
      : `http://localhost:3000/content/create`;

    try {
      const res = await fetch(url, {
        method: isExisting ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(
          isExisting ?
            (() => {
              const { uuid, ...rest } = parsed;
              return rest;
            })()
          : parsed,
        ),
      });

      if (res.ok) {
        const refreshRes = await fetch("http://localhost:3000/content", {
          credentials: "include",
        });
        const updatedData = await refreshRes.json();
        setRows(updatedData);

        setViewState(null);
      } else {
        const errorData = await res.json().catch(() => ({}));
        console.error("Save failed:", errorData);
      }
    } catch (error) {
      console.error("Network error during save:", error);
    }
  };

  const getColumns = (
    _onEdit: (row: ContentPureType) => void,
    onDelete: (row: ContentPureType) => void,
  ): GridColDef[] => [
    {
      field: "favorite",
      headerName: "Favorite",
      width: 60,
      renderCell: (params) => (
        <>
          <IconButton onClick={() => toggleFavorite(params.row)}>
            <Heart
              size={20}
              fill={params.row.id_favorite ? "ff4d4f" : "none"}
              color={params.row.isfavorite ? "ff4d4f" : "#e50000"}
            ></Heart>
          </IconButton>
        </>
      ),
    },
    { field: "title", headerName: "Title", flex: 1 },
    { field: "url", headerName: "URL", flex: 1 },
    { field: "content_owner", headerName: "Content Owner", flex: 1 },
    { field: "content_type", headerName: "Type", width: 130 },
    { field: "status", headerName: "Status", width: 120 },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <>
          <IconButton onClick={() => setViewState(params.row)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => onDelete(params.row)}>
            <DeleteIcon color="error" />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      {viewState ?
        <ContentForm
          initialData={viewState === "new" ? null : viewState}
          onSave={handleSave}
          onCancel={() => setViewState(null)}
        />
      : <Box>
          <AppBar
            position="static"
            sx={{
              backgroundColor: "white",
              boxShadow: "none",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <StyledToolbar
              sx={{ width: "100%", boxSizing: "border-box", px: 0 }}
            >
              <Typography
                variant="h4"
                sx={{ pb: 2, pt: 4, color: "black", fontWeight: "bold" }}
              >
                Content Management
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  width: "100%",
                }}
              >
                <Box sx={{ flexGrow: 1, maxWidth: "70%" }}>
                  <HeaderSearchBar setSearchQuery={setSearchQuery} />
                </Box>
                <Button
                  onClick={() => setViewState("new")}
                  variant="contained"
                  startIcon={<AddIcon />}
                  sx={{ whiteSpace: "nowrap" }} // Prevents the button text from wrapping or stretching
                >
                  New Content
                </Button>
              </Box>
            </StyledToolbar>
          </AppBar>
          <DataGrid
            rows={filteredRows}
            getRowId={(row) => row.uuid}
            columns={getColumns(setViewState, handleDelete)}
            pageSizeOptions={[5, 10]}
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } },
            }}
          />
        </Box>
      }
    </Box>
  );
}
