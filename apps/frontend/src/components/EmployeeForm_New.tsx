import * as React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
//import Button from '@mui/material/Button'
// import SendIcon from '@mui/icons-material/Send'
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import CalendarInput from "./CalendarInput.tsx";
import "./EmployeeForm.css";

export default function NewEmployeeForm() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (newAlignment: string) => {
    setAlignment(newAlignment);
  };

  const [department, setDepartment] = React.useState("");

  const handleDepartmentChange = (event: SelectChangeEvent) => {
    setDepartment(event.target.value as string);
  };

  const [supervisor, setSupervisor] = React.useState("");

  const handleSupervisorChange = (event: SelectChangeEvent) => {
    setSupervisor(event.target.value as string);
  };

  return (
    <section className="main-content-form">
      <div className="header">
        <h2>Employee Management Form</h2>
      </div>

      <div className="main">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          onChange={handleChange}
          aria-label="Platform"
          className="toggler"
        >
          <ToggleButton value="New Employee">New Employee</ToggleButton>
          <ToggleButton value="Change Employee">Manage Employee</ToggleButton>
        </ToggleButtonGroup>

        {/* New Employee Form */}
        <form>
          <label htmlFor="newHire">Personal Information</label>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          ></TextField>
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
          ></TextField>
          <CalendarInput label="Date of Birth"></CalendarInput>
          <label htmlFor="newHire">Employment Information</label>
          <TextField
            id="outlined-basic"
            label="Position"
            variant="outlined"
          ></TextField>
          <FormControl fullWidth>
            <InputLabel id="department-label">Department</InputLabel>
            <Select
              labelId="department-label"
              id="department"
              label="Department"
              value={department}
              onChange={handleDepartmentChange}
            >
              <MenuItem value={10}>Operation Technology</MenuItem>
              <MenuItem value={20}>Accounting</MenuItem>
            </Select>
          </FormControl>
          <CalendarInput label="Start Date"></CalendarInput>
          <FormControl fullWidth>
            <InputLabel id="supervisor-label">Supervisor</InputLabel>
            <Select
              labelId="supervisor-label"
              id="supervisor"
              label="supervisor"
              value={supervisor}
              onChange={handleSupervisorChange}
            >
              <MenuItem value={10}>Myer Cheng</MenuItem>
              <MenuItem value={20}>Wilson Wong</MenuItem>
            </Select>
          </FormControl>
          <label htmlFor="newHire">Contact Information</label>
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
          ></TextField>
          <TextField
            id="outlined-basic"
            label="Personal Email Address"
            variant="outlined"
          ></TextField>
          <TextField
            id="outlined-basic"
            label="Corporate Email Address"
            variant="outlined"
          ></TextField>
      
        </form>
      </div>
    </section>
  );
}
