import {useState, type ChangeEvent} from "react";
import { TextField, IconButton, formGroupClasses } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import './dashboard.css'

interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}

const SearchBar = ({ setSearchQuery }: SearchBarProps) => (
    <div className="search-container">
        <form>
            <IconButton>
                    <SearchIcon></SearchIcon>
            </IconButton>
            <TextField
                id="search-bar"
                placeholder="search"
                variant="outlined"
                size="small"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setSearchQuery(e.target.value);
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
                }}></TextField>          
        </form>
    </div>
)

export default SearchBar;