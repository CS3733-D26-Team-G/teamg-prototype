import * as React from "react";
import "./Sidebar.css";
import {
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleIcon from "@mui/icons-material/Article";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SpeedIcon from "@mui/icons-material/Speed";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

export default function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div
      className={"Sidebar"}
      style={{
        width: isOpen ? "200px" : "48px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: isOpen ? "space-between" : "center",
          padding: "8px",
        }}
      >
        <img
          src={"/hanover_logo.png"}
          alt="Hanover Logo"
          style={{
            width: "140px",
            height: "auto",
            display: isOpen ? "block" : "none",
            imageRendering: "crisp-edges",
          }}
        />
        <IconButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ?
            <KeyboardDoubleArrowLeftIcon />
          : <KeyboardDoubleArrowRightIcon sx={{ width: 32, height: 32 }} />}
        </IconButton>
      </Box>
      <div>
        <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {/*Dashboard Button*/}
          <ListItemButton
            component={Link}
            to={"/dashboard"}
            sx={{ px: 1 }}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: isOpen ? 2 : 0 }}>
              <DashboardIcon />
            </ListItemIcon>
            {isOpen && <ListItemText>Dashboard</ListItemText>}
          </ListItemButton>

          {/*My Forms Button*/}
          <ListItemButton
            component={Link}
            to={"/my-forms"}
            sx={{ px: 1 }}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: isOpen ? 2 : 0 }}>
              <ArticleIcon />
            </ListItemIcon>
            {isOpen && <ListItemText>My Forms</ListItemText>}
          </ListItemButton>

          {/*Library Button*/}
          <ListItemButton
            component={Link}
            to={"/library"}
            sx={{ px: 1 }}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: isOpen ? 2 : 0 }}>
              <LibraryBooksIcon />
            </ListItemIcon>
            {isOpen && <ListItemText>Library</ListItemText>}
          </ListItemButton>

          {/*Activity Button*/}
          <ListItemButton
            component={Link}
            to={"/activity"}
            sx={{ px: 1 }}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: isOpen ? 2 : 0 }}>
              <SpeedIcon />
            </ListItemIcon>
            {isOpen && <ListItemText>Activity</ListItemText>}
          </ListItemButton>

          {/*Settings Button*/}
          <ListItemButton
            component={Link}
            to={"/settings"}
            sx={{ px: 1 }}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: isOpen ? 2 : 0 }}>
              <SettingsIcon />
            </ListItemIcon>
            {isOpen && <ListItemText>Settings</ListItemText>}
          </ListItemButton>
        </List>
      </div>

      <div
        style={{
          marginTop: "auto",
        }}
      >
        {/*Profile Button*/}
        <ListItemButton
          component={Link}
          to={"/profile"}
          sx={{ px: 1 }}
        >
          <ListItemIcon sx={{ minWidth: 0, mr: isOpen ? 2 : 0 }}>
            <Avatar sx={{ width: 32, height: 32 }}></Avatar>
          </ListItemIcon>
          {isOpen && <ListItemText>My Account</ListItemText>}
        </ListItemButton>
      </div>
    </div>
  );
}
