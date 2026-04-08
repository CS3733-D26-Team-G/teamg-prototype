import React, { useState, useEffect } from "react";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import {
  IconButton,
  Box,
  Button,
  AppBar,
  Toolbar,
  styled,
  Typography,
  Chip,
  CircularProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import ManageEmployeeForm from "./ManageEmployeeForm";
import HeaderSearchBar from "./HeaderSearchBar";
import {
  ContentInputSchema,
  type ContentInputType,
  EmployeeUncheckedCreateWithoutAccountInputObjectSchema
  type EmployeePureType,
} from "@repo/zod";
import { uuid } from "zod";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  flexDirection: "column",
  alignItems: "stretch",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  minHeight: 128,
}));

const BLANK_EMPLOYEE: EmployeePureType = {
  uuid: "",
  account: null,
  first_name: "",
  last_name: "",
  date_of_birth: new Date(),
  position: "UNDERWRITER", //
  department: "OPERATION_TECHNOLOGY",
  start_date: new Date(),
  supervisor: "",
  phone_number: "",
  personal_email: "",
  corporate_email: "",
};

export default function EmployeeManagement() {
  const [rows, setRows] = useState<EmployeePureType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewState, setViewState] = useState<EmployeePureType | "new" | null>(
    null,
  );
  const [loading, setLoading] = useState(true);

  // --- Data Fetching ---
  const loadEmployees = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/employee", {
        credentials: "include",
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setRows(data);
    } catch (error) {
      console.error("Failed to fetch employees:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadEmployees();
  }, []);

  // --- Filtering Logic ---
  const filteredRows = rows.filter((row) => {
    if (!searchQuery.trim()) return true;
    const searchStr = searchQuery.toLowerCase();
    return (
      row.first_name.toLowerCase().includes(searchStr) ||
      row.last_name.toLowerCase().includes(searchStr) ||
      row.position.toLowerCase().includes(searchStr)
    );
  });

  // --- Handlers ---
  const handleDelete = async (row: EmployeePureType) => {
    if (!window.confirm(`Remove employee ${row.first_name} ${row.last_name}?`))
      return;

    try {
      const res = await fetch(
        `http://localhost:3000/employee/delete/${row.uuid}`,
        {
          method: "POST",
          credentials: "include",
        },
      );

      if (res.ok) {
        setRows((prev) => prev.filter((r) => r.uuid !== row.uuid));
      } else {
        console.error("Failed to delete employee");
      }
    } catch (error) {
      console.error("Network error during delete:", error);
    }
  };

  const handleSave = async (updatedUser: EmployeePureType) => {
    const isExisting = viewState !== "new";

    // 1. Prepare the payload
    // We ensure dates are stringified.
    // NOTE: If the backend Zod is z.date(), it will ALWAYS fail
    // unless the backend uses z.coerce.date().
    const payload = {
      ...updatedUser,
      date_of_birth:
        updatedUser.date_of_birth instanceof Date ?
          updatedUser.date_of_birth.toISOString()
        : updatedUser.date_of_birth,
      start_date:
        updatedUser.start_date instanceof Date ?
          updatedUser.start_date.toISOString()
        : updatedUser.start_date,
      uuid: isExisting ? updatedUser.uuid : crypto.randomUUID(),
    };

    const url =
      isExisting ?
        `http://localhost:3000/employee/update/${payload.uuid}`
      : `http://localhost:3000/employee/create`;

    // 2. Log exactly what we are sending to compare with the Zod schema
    console.log("Sending Payload:", JSON.stringify(payload, null, 2));

    try {
      const res = await fetch(url, {
        method: isExisting ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        await loadEmployees();
        setViewState(null);
      } else {
        const errorText = await res.text();
        console.error("Backend validation error:", errorText);

        // Insight: If it still says "expected date", the backend MUST
        // be updated to use z.coerce.date() in the Zod schema.
        alert(
          "Validation Error: The server expected a Date object but received a String.",
        );
      }
    } catch (error) {
      console.error("Error during handleSave:", error);
    }
  };

  const getColumns = (
    onEdit: (row: EmployeePureType) => void,
    onDelete: (row: EmployeePureType) => void,
  ): GridColDef[] => [
    { field: "first_name", headerName: "First Name", flex: 1 },
    { field: "last_name", headerName: "Last Name", flex: 1 },
    {
      field: "position",
      headerName: "User Type",
      width: 180,
      renderCell: (params) => {
        const role = params.value as EmployeePureType["position"];
        const colorMap: Record<
          EmployeePureType["position"],
          "error" | "info" | "success"
        > = {
          ADMIN: "error",
          UNDERWRITER: "info",
          BUSINESS_ANALYST: "success",
        };

        return (
          <Chip
            label={role}
            color={colorMap[role] || "default"}
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
          <IconButton onClick={() => onDelete(params.row)}>
            <DeleteIcon color="error" />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <Box sx={{ height: 600, width: "100%", p: 2 }}>
      {viewState ?
        <ManageEmployeeForm
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
            <StyledToolbar sx={{ width: "100%", px: 0 }}>
              <Typography
                variant="h4"
                sx={{ pb: 2, pt: 4, color: "black", fontWeight: "bold" }}
              >
                Employee Management
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
                  sx={{ whiteSpace: "nowrap" }}
                >
                  New Employee
                </Button>
              </Box>
            </StyledToolbar>
          </AppBar>

          <DataGrid
            rows={filteredRows}
            columns={getColumns((row) => setViewState(row), handleDelete)}
            getRowId={(row) => row.uuid}
            loading={loading}
            pageSizeOptions={[5]}
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } },
            }}
            sx={{ mt: 2 }}
          />
        </Box>
      }
    </Box>
  );
}
