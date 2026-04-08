import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ManageEmployeeForm from "./ManageEmployeeForm";

export interface UserRow {
  id: number | string;
  firstName: string;
  lastName: string;
  role: "Admin" | "Underwriter" | "Business Analyst";
}

const initialRows: UserRow[] = [
  { id: 1, firstName: "Colin", lastName: "Truong", role: "Admin" },
  { id: 2, firstName: "Joe", lastName: "Smith", role: "Underwriter" },
  { id: 3, firstName: "Emmy", lastName: "Fujiwara", role: "Business Analyst" },
];

export default function ContentGrid() {
  const [rows, setRows] = useState<UserRow[]>(initialRows);
  const [editingUser, setEditingUser] = React.useState<UserRow | null>(null);

  const handleDelete = (id: number | string) => {
    setRows((prev) => prev.filter((row) => row.id !== id));
  };

  const handleEdit = (row: UserRow) => {
    setEditingUser(row);
  };

  const handleSave = (updatedUser: UserRow) => {
    setRows((prev) =>
      prev.map((r) => (r.id === updatedUser.id ? updatedUser : r)),
    );
    setEditingUser(null);
  };

  const getColumns = (
    onEdit: (row: UserRow) => void,
    onDelete: (id: number | string) => void,
  ): GridColDef[] => [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First Name", flex: 1 },
    { field: "lastName", headerName: "Last Name", flex: 1 },
    {
      field: "role",
      headerName: "User Type",
      width: 180,
      renderCell: (params) => {
        const role = params.value;
        let color:
          | "default"
          | "primary"
          | "secondary"
          | "error"
          | "info"
          | "success"
          | "warning" = "default";

        // Color coding logic
        if (role === "Admin") color = "error";
        if (role === "Underwriter") color = "info";
        if (role === "Business Analyst") color = "success";

        return (
          <Chip
            label={role}
            color={color}
            size="small"
            variant="outlined"
          />
        );
      },
    },
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
        columns={getColumns(handleEdit, handleDelete)}
        pageSizeOptions={[5, 10]}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
      />
    </Box>
  );
}
