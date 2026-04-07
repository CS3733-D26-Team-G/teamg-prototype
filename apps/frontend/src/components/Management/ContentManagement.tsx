import React, { useEffect, useState } from "react";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ManageEmployeeForm from "./ManageEmployeeForm";

export interface UserRow {
  title: string;
  url: string;
  content_owner: string;
  last_modified_time: Date;
  expiration_time: Date;
  content_type: string;
  status: string;
}

export default function ContentManagement() {
  const [rows, setRows] = useState<UserRow[]>();
  const [editingUser, setEditingUser] = React.useState<UserRow | null>(null);

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

  const handleDelete = (id: string) => {
    setRows((prev) => prev.filter((row) => row.title !== id));
  };

  const handleEdit = (row: UserRow) => {
    setEditingUser(row);
  };

  const handleSave = (updatedUser: UserRow) => {
    setRows((prev) =>
      prev.map((r) => (r.title === updatedUser.title ? updatedUser : r)),
    );
    setEditingUser(null);
  };

  const getColumns = (
    onEdit: (row: UserRow) => void,
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

          <IconButton onClick={() => onDelete(params.row.id)}>
            <DeleteIcon color="error" />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      {editingUser && (
        <ManageEmployeeForm
          initialData={editingUser}
          onSave={handleSave}
          onCancel={() => setEditingUser(null)}
        />
      )}
      <DataGrid
        rows={rows}
        getRowId={(row) => row.title}
        columns={getColumns(handleEdit, handleDelete)}
        pageSizeOptions={[5, 10]}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
      />
    </Box>
  );
}
