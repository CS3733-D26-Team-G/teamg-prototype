import { useState, type ChangeEvent } from "react";
import { TextField, IconButton, formGroupClasses, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import "./dashboard.css";

interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}

const SearchBar = ({ setSearchQuery }: SearchBarProps) => (
  <div className="search-container">
    <Box>
      <TextField
        id="search-bar"
        placeholder="search"
        variant="outlined"
        size="small"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setSearchQuery(e.target.value);
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      ></TextField>
    </Box>
  </div>
);

export default SearchBar;
