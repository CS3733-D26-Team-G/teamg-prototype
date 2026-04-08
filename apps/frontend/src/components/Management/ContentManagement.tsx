import React, { useEffect, useState } from "react";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ContentForm from "./ContentForm";
import {
  ContentInputSchema,
  type ContentInputType,
  type ContentPureType,
} from "@repo/zod";

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

  const handleDelete = async (title: string) => {
    try {
      const res = await fetch(
        `http://localhost:3000/content/${encodeURIComponent(title)}`,
        {
          method: "POST",
        },
      );

      if (res.ok) {
        setRows((prev) => prev?.filter((row) => row.title !== title));
      }
    } catch (error) {
      console.error("Failed to delete:", error);
    }
  };

  const handleSave = async (formData: ContentInputType) => {
    const isExisting = viewState !== "new";
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

    const res = await fetch(url, {
      method: isExisting ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        isExisting ?
          (() => {
            const { uuid, ...rest } = parsed;
            return rest;
          })()
        : parsed,
      ),
    });
  };

  const getColumns = (
    onEdit: (row: ContentPureType) => void,
    onDelete: (title: string) => void,
  ): GridColDef[] => [
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
          <IconButton onClick={() => onDelete(params.row.title)}>
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
      : <DataGrid
          rows={rows || []}
          getRowId={(row) => row.uuid}
          columns={getColumns(setViewState, handleDelete)}
          pageSizeOptions={[5, 10]}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
        />
      }
    </Box>
  );
}
