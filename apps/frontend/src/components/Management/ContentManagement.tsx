import React, { useEffect, useState } from "react";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ContentForm from "./ContentForm";
import type { ContentPureType } from "zod/schemas";

export default function ContentManagement() {
  const [rows, setRows] = useState<ContentPureType[]>();
  const [editingUser, setEditingUser] = React.useState<ContentPureType | null>(
    null,
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/content");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);
        setRows(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    void fetchData();
  }, []);

  const handleDelete = async (title: string) => {
    try {
      const res = await fetch(`http://localhost:3000/content/${encodeURIComponent(title)}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setRows((prev) => prev?.filter((row) => row.title !== title));
      }
    } catch (error) {
      console.error("Failed to delete:", error);
    }
  };

  const handleEdit = (row: ContentPureType) => {
    setEditingUser(row);
  };

  const handleSave = async (updatedUser: ContentPureType) => {
    try {
      const res = await fetch(`http://localhost:3000/content/${encodeURIComponent(updatedUser.title)}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      });

      if (res.ok) {
        const savedData = await res.json();
        setRows((prev) =>
          prev?.map((r) => (r.title === updatedUser.title ? savedData : r)),
        );
        setEditingUser(null);
      }
    } catch (error) {
      console.error("Failed to save:", error);
    }
  };

  const getColumns = (
    onEdit: (row: ContentPureType) => void,
    onDelete: (id: string) => void,
  ): GridColDef[] => [
    { field: "title", headerName: "title", flex: 1 },
    { field: "url", headerName: "url", flex: 1 },
    { field: "content_owner", headerName: "Content Owner", flex: 1 },
    { field: "last_modified_time", headerName: "last modified", flex: 1 },
    { field: "expiration_date", headerName: "expires", flex: 1 },
    { field: "content_type", headerName: "Type", width: 120 },
    { field: "status", headerName: "Status", width: 120 },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <>
          <IconButton onClick={() => onEdit(params.row)}>
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
      {editingUser ? (
        <ContentForm
          initialData={editingUser}
          onSave={handleSave}
          onCancel={() => setEditingUser(null)}
        />
      ) : (
      <DataGrid
        rows={rows}
        getRowId={(row) => row.title}
        columns={getColumns(handleEdit, handleDelete)}
        pageSizeOptions={[5, 10]}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
      />
      )}
    </Box>
  );
}
