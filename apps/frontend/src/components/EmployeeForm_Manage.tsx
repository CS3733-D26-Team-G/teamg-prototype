import * as React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import "./EmployeeForm.css";


interface ManageEmployeeFormProps {
  initialData: any; // Use your UserRow type here
  onSave: (updatedData: any) => void;
  onCancel: () => void;
}


export default function ManageEmployeeForm({initialData, onSave, onCancel}: ManageEmployeeFormProps) {
    const [role, setRole] = React.useState("");

    const handleRoleChange = (event: SelectChangeEvent) => {
      setRole(event.target.value as string);
    };

    const [formData, setFormData] = React.useState(initialData);

    React.useEffect(() => {
      setFormData(initialData);
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name as string]: value });
    };

    return (
      <section className="main-content-form">
        <div className="header">
          <h2>Employee Management Form</h2>
        </div>

        <div className="main">

          {/* New Employee Form */}
          <form onSubmit={(e) => {e.preventDefault(); onSave(formData); }}>
            <label htmlFor="newHire">Personal Information</label>
            <TextField
              id="outlined-basic"
              label="First Name"
              value={formData.firstName || ""}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              variant="outlined"
            ></TextField>
            <TextField
              id="outlined-basic"
              label="Last Name"
              defaultValue={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              variant="outlined"
            ></TextField>
            <label htmlFor="newHire">Employment Information</label>
            <FormControl fullWidth>
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                id="role"
                label="Role"
                value={formData.role}
                onChange={(e) => setFormData({...formData, role: e.target.value})}
              >
                <MenuItem value={'Admin'}>Admin</MenuItem>
                <MenuItem value={'Underwriter'}>Underwriter</MenuItem>
                <MenuItem value={'Business Analyst'}>Business Analyst</MenuItem>
              </Select>
              <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button onClick={onCancel}>Cancel</Button>
                <Button type="submit" variant="contained">Save Changes</Button>
              </Stack>
            </FormControl>
            
        
          </form>
        </div>
      </section>
    );
}
