import React, { useEffect, useState } from "react";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import {
  IconButton,
  Box,
  Typography,
  Button,
  AppBar,
  Toolbar,
  styled,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import ContentForm from "./ContentForm";
import HeaderSearchBar from "./HeaderSearchBar"; // Assuming this is your custom search input
import type { ContentPureType } from "@repo/zod/schemas";
import "./ContentManagement.css";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  flexDirection: "column",
  alignItems: "stretch",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  minHeight: 128,
}));

interface ContentManagementProps {
  viewState: ContentPureType | "new" | null;
  setViewState: React.Dispatch<
    React.SetStateAction<ContentPureType | "new" | null>
  >;
}

export default function ContentManagement({
  viewState,
  setViewState,
}: ContentManagementProps) {
  const [rows, setRows] = useState<ContentPureType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchContent = React.useCallback(async () => {
    try {
      const res = await fetch("http://localhost:3000/content");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const data = await res.json();
      console.log("Fetched data:", data); // Debugging: check your console!

      // Ensure we are setting an array
      if (Array.isArray(data)) {
        setRows(data);
      } else if (data && typeof data === "object") {
        // Sometimes backends wrap arrays in an object like { content: [] }
        setRows(data.content || []);
      } else {
        setRows([]);
      }
    } catch (error) {
      console.error("Failed to fetch content:", error);
      setRows([]); // Clear rows on error so it doesn't stay loading
    }
  }, []);

  // 2. The Effect is now safe because fetchContent is stable
  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  );

  const handleDelete = async (row: ContentPureType) => {
    if (!window.confirm(`Delete "${row.title}"?`)) return;
    try {
      const res = await fetch(
        `http://localhost:3000/content/delete/${row.uuid}`,
        {
          method: "POST",
        },
      );
      if (res.ok) {
        setRows((prev) => prev.filter((r) => r.uuid !== row.uuid));
      }
    } catch (error) {
      console.error("Failed to delete:", error);
    }
  };

  const handleSave = async (formData: ContentPureType) => {
    const isExisting = viewState !== "new";
    const uuid =
      isExisting ? (viewState as ContentPureType).uuid : crypto.randomUUID();
    const url =
      isExisting ?
        `http://localhost:3000/content/edit/${uuid}`
      : `http://localhost:3000/content/create`;

    try {
      const res = await fetch(url, {
        method: isExisting ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          uuid,
          last_modified_time: new Date().toISOString(),
          expiration_time: new Date(formData.expiration_time).toISOString(),
        }),
      });

      if (res.ok) {
        setViewState(null);
        await fetchContent();
      }
    } catch (error) {
      console.error("Save failed:", error);
    }
  };

  const getColumns = (): GridColDef[] => [
    { field: "title", headerName: "Title", flex: 1 },
    { field: "url", headerName: "URL", flex: 1 },
    { field: "content_owner", headerName: "Content Owner", flex: 1 },
    { field: "content_type", headerName: "Type", width: 130 },
    { field: "status", headerName: "Status", width: 120 },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <>
          <IconButton onClick={() => setViewState(params.row)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(params.row)}>
            <DeleteIcon color="error" />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100vw", // Prevents the container from exceeding the screen
        overflowX: "hidden", // Cuts off any "infinite" stretching
        display: "flex",
        flexDirection: "column",
      }}
    >
      {viewState ?
        <ContentForm
          initialData={viewState === "new" ? null : viewState}
          onSave={handleSave}
          onCancel={() => setViewState(null)}
        />
      : <>
          {/* Integrated Header Section */}
          {/* Added width: "100%" and boxSizing: "border-box" to keep it contained */}
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

          {/* DataGrid Section */}
          <Box
            sx={{
              width: "100%",
              px: 3,
              mt: 2,
              boxSizing: "border-box",
            }}
          >
            <DataGrid
              rows={filteredRows}
              getRowId={(row) => row.uuid}
              columns={getColumns()}
              pageSizeOptions={[5, 10, 25]}
              initialState={{
                pagination: { paginationModel: { pageSize: 10 } },
              }}
              disableRowSelectionOnClick
              autoHeight
            />
          </Box>
        </>
      }
    </Box>
  );
}
