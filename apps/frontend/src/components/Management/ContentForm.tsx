// import * as React from "react";
// import { useState } from "react";
// import TextField from "@mui/material/TextField";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import Button from "@mui/material/Button";
// import Select, { type SelectChangeEvent } from "@mui/material/Select";
// import { MenuItem, Stack } from "@mui/material";
// import Box from "@mui/material/Box";
// import CalendarInput from "../CalendarInput.tsx";
// import type { ContentInputType } from "@repo/zod";
// import "./ContentForm.css";

// interface ContentFormProps {
//   initialData?: ContentInputType | null;
//   onSave: (data: ContentInputType) => void;
//   onCancel: () => void;
// }

// export default function ContentForm({
//   initialData,
//   onSave,
//   onCancel,
// }: ContentFormProps) {
//   // Determine mode once
//   const isEditing = !!initialData;

//   const [formData, setFormData] = useState<ContentInputType>({
//     uuid: initialData?.uuid || "",
//     for_position: initialData?.for_position || "UNDERWRITER",
//     title: initialData?.title || "",
//     url: initialData?.url || "",
//     content_owner: initialData?.content_owner || "",
//     // If creating, default to today's date
//     last_modified_time:
//       initialData?.last_modified_time ?
//         new Date(initialData.last_modified_time)
//       : new Date(),
//     expiration_time:
//       initialData?.expiration_time ?
//         new Date(initialData.expiration_time)
//       : new Date(),
//     content_type: initialData?.content_type || "REFERENCE",
//     status: initialData?.status || "AVAILABLE",
//   });

//   const handleChange = (field: keyof ContentInputType, value: any) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleSelectChange =
//     (field: keyof ContentInputType) => (event: SelectChangeEvent) => {
//       handleChange(field, event.target.value);
//     };

//   const handleInternalSubmit = (e: React.FormEvent) => {
//     // Prevent page reload if button is inside a form
//     e.preventDefault();
//     onSave(formData);
//   };

  return (
    <section className="main-content-form">
      <div className="MuiPaper-root">
        <div>
          {/* Use component="form" to handle the Enter key correctly */}
          <Box
            component="form"
            className="form"
            onSubmit={handleInternalSubmit}
          >
            {/* Dynamic Header */}
            <h1>{isEditing ? "Edit Document" : "Submit a New File"}</h1>
            <TextField
              label="Name of Document"
              fullWidth
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="URL of Link"
              fullWidth
              value={formData.url}
              onChange={(e) => handleChange("url", e.target.value)}
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="Content Owner"
              fullWidth
              value={formData.content_owner}
              onChange={(e) => handleChange("content_owner", e.target.value)}
              variant="outlined"
              margin="normal"
            />

            <FormControl
              fullWidth
              margin="normal"
            >
              <InputLabel id="recipient-label">Intended Recipient</InputLabel>
              <Select
                labelId="recipient-label"
                label="Intended Recipient"
                value={formData.for_position}
                onChange={handleSelectChange("for_position")}
              >
                <MenuItem value="UNDERWRITER">Underwriter</MenuItem>
                <MenuItem value="BUSINESS_ANALYST">Business Analyst</MenuItem>
                <MenuItem value="ADMIN">Admin</MenuItem>
              </Select>
            </FormControl>

            <CalendarInput
              label="Last Modified Date"
              value={formData.last_modified_time}
              onChange={(newDate) =>
                handleChange("last_modified_time", newDate)
              }
            />
            <CalendarInput
              label="Link Expiration Date"
              value={formData.expiration_time}
              onChange={(newDate) => handleChange("expiration_time", newDate)}
            />

            <FormControl
              fullWidth
              margin="normal"
            >
              <InputLabel id="content-type-label">Type of Content</InputLabel>
              <Select
                labelId="content-type-label"
                label="Type of Content"
                value={formData.content_type}
                onChange={handleSelectChange("content_type")}
              >
                <MenuItem value="REFERENCE">Reference Content</MenuItem>
                <MenuItem value="WORKFLOW">Workflow Content</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              fullWidth
              margin="normal"
            >
              <InputLabel id="status-label">Document Status</InputLabel>
              <Select
                labelId="status-label"
                label="Document Status"
                value={formData.status}
                onChange={handleSelectChange("status")}
              >
                <MenuItem value="AVAILABLE">Available</MenuItem>
                <MenuItem value="IN_USE">In Use</MenuItem>
                <MenuItem value="UNAVAILABLE">Unavailable</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              color="primary"
            >
              {/* Dynamic Button Text */}
              {isEditing ? "Update Changes" : "Create Content"}
            </Button>
            <Button
              variant="outlined"
              fullWidth
              onClick={onCancel}
            >
              Cancel
            </Button>
          </Box>
        </div>
      </div>
    </section>
  );
}
