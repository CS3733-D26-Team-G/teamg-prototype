import * as React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Button,
  Box,
  Typography,
} from "@mui/material";
import {
  ContentInputSchema,
  type ContentInputType,
  type EmployeePureType,
} from "@repo/zod";
import { uuid } from "zod";
//import "./EmployeeForm.css";

interface ManageEmployeeFormProps {
  initialData: EmployeePureType | null; // Null means "New Employee"
  onSave: (formData: EmployeePureType) => void;
  onCancel: () => void;
}

const defaultUser: Partial<EmployeePureType> = {
  first_name: "",
  last_name: "",
  position: "UNDERWRITER", // Default role
};

export default function ManageEmployeeForm({
  initialData,
  onSave,
  onCancel,
}: ManageEmployeeFormProps) {
  // 1. Initialize state with either initialData or the default blank user
  const [formData, setFormData] = React.useState<EmployeePureType>(
    (initialData as EmployeePureType) || { ...defaultUser, id: "" },
  );

  const isEditing = !!initialData;

  // 2. Sync state if the prop changes
  React.useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({ ...defaultUser, id: "" } as EmployeePureType);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Box sx={{ p: 3, backgroundColor: "white", borderRadius: 2 }}>
      <Typography
        variant="h5"
        sx={{ mb: 3, fontWeight: "bold" }}
      >
        {isEditing ? "Edit Employee" : "Add New Employee"}
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            Personal Information
          </Typography>

          <Stack
            direction="row"
            spacing={2}
          >
            <TextField
              fullWidth
              label="First Name"
              required
              value={formData.first_name}
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
            />
            <TextField
              fullWidth
              label="Last Name"
              required
              value={formData.last_name}
              onChange={(e) =>
                setFormData({ ...formData, last_name: e.target.value })
              }
            />
          </Stack>

          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            Employment Information
          </Typography>

          <FormControl
            fullWidth
            required
          >
            <InputLabel id="role-label">Position</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              label="Role"
              value={formData.position || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  position: e.target.value as EmployeePureType["position"],
                })
              }
            >
              <MenuItem value="ADMIN">Admin</MenuItem>
              <MenuItem value="UNDERWRITER">Underwriter</MenuItem>
              <MenuItem value="BUSINESS_ANALYST">Business Analyst</MenuItem>
            </Select>
          </FormControl>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="flex-end"
            sx={{ pt: 2 }}
          >
            <Button
              onClick={onCancel}
              color="inherit"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
            >
              {isEditing ? "Save Changes" : "Create Employee"}
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
}
