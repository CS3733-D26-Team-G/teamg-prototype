import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import HeaderSearchBar from './HeaderSearchBar'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

export default function ContentHeader() {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar>
                <StyledToolbar>
                    <HeaderSearchBar setSearchQuery={setSearchQuery}></HeaderSearchBar>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
                    >
                        MUI
                    </Typography>
                    <IconButton size="large" aria-label="search" color="inherit">
                        <SearchIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="display more actions"
                        edge="end"
                        color="inherit"
                    >
                        <MoreIcon />
                    </IconButton>
                </StyledToolbar>
            </AppBar>
        </Box>
    );
}