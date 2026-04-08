import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
// import SendIcon from '@mui/icons-material/Send'
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import CalendarInput from "../CalendarInput.tsx";
import type { ContentPureType } from "zod/schemas";
import "./ContentForm.css";
import { useTheme } from "@mui/material/styles";

interface ContentFormProps {
  initialData?: ContentPureType | null; // Optional: if present, we are editing
  onSave: (data: ContentPureType) => void;
  onCancel: () => void;
}

export default function ContentForm({
  initialData,
  onSave,
  onCancel,
}: ContentFormProps) {
  const [recipient, setRecipient] = React.useState("");
  const theme = useTheme();

  const [formData, setFormData] = useState<ContentPureType>({
    uuid: initialData?.uuid || "",
    for_position: initialData?.for_position || "UNDERWRITER",

    title: initialData?.title || "",
    url: initialData?.url || "",
    content_owner: initialData?.content_owner || "",
    last_modified_time: initialData?.last_modified_time || new Date(),
    expiration_time: initialData?.expiration_time || new Date(),
    content_type: initialData?.content_type || "REFERENCE",
    status: initialData?.status || "AVAILABLE",
  });

  const handleChange = (field: keyof ContentPureType, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSelectChange =
    (field: keyof ContentPureType) => (event: SelectChangeEvent) => {
      handleChange(field, event.target.value);
    };

  const handleInternalSubmit = () => {
    console.log("Button clicked! Current data:", formData);
    onSave(formData);
  };

  return (
    <section className="main-content-form">
      <div className="MuiPaper-root">
        <Box
          component="div"
          className="form"
          //sx={{overflowY: "auto" }}
        >
          <h1>Submit a File</h1>
          <TextField
            id="outlined-basic"
            label="Name of Document"
            defaultValue={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
            variant="outlined"
          ></TextField>
          <TextField
            id="outlined-basic"
            label="URL of Link"
            defaultValue={formData.url}
            onChange={(e) => handleChange("url", e.target.value)}
            variant="outlined"
          ></TextField>
          <TextField
            id="outlined-basic"
            label="Content Owner"
            value={formData.content_owner}
            variant="outlined"
          ></TextField>
          <div className="form-row">
            <FormControl fullWidth>
              <InputLabel id="recipient-label">Intended Recipient</InputLabel>
              <Select
                labelId="recipient-label"
                id="recipient"
                label="Intended Recipient"
                defaultValue={formData.for_position}
                onChange={handleSelectChange("for_position")}
              >
                <MenuItem value={10}>Underwriter</MenuItem>
                <MenuItem value={20}>Business Analyst</MenuItem>
              </Select>
            </FormControl>
          </div>
          <CalendarInput label="Last Modified Date"></CalendarInput>
          <CalendarInput label="Link Expiration Date"></CalendarInput>
          <FormControl fullWidth>
            <InputLabel id="content-type-label">Type of Content</InputLabel>
            <Select
              labelId="content-type-label"
              id="content-type"
              label="Type of Content"
              defaultValue={formData.content_type}
              onChange={handleSelectChange("content_type")}
            >
              <MenuItem value={10}>Reference Content</MenuItem>
              <MenuItem value={20}>Workflow Content</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="status-label">Document Status</InputLabel>
            <Select
              labelId="status-label"
              id="status"
              label="Document Status"
              defaultValue={formData.status}
              onChange={handleSelectChange("status")}
            >
              <MenuItem value={10}>Available</MenuItem>
              <MenuItem value={20}>In Use</MenuItem>
              <MenuItem value={30}>Unavailable</MenuItem>
            </Select>
          </FormControl>
          {/* <div className='submit-container'> */}
          <Button
            type="submit"
            variant="contained"
            onClick={handleInternalSubmit}
          >
            Update Changes
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={onCancel}
            sx={{ mb: 5 }}
          >
            Cancel
          </Button>
          {/* </div> */}
        </Box>
      </div>
    </section>
  );
}
