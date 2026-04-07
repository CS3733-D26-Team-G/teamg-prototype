import { useState } from "react";
import SearchBar from "./DashboardComponents/SearchBar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { DatePicker } from "@mui/x-date-pickers";

function Profile() {
  const [searchQuery, setSearchQuery] = useState("");
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          height: 80,
          mx: "auto",
          backgroundColor: "#395277",
          mt: 4,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#FFFFFF",
            p: 2,
          }}
        >
          My Account
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 3,
            p: 2,
          }}
        >
          <Typography
            variant={"h5"}
            sx={{
              color: "#FFFFFF",
              mt: 0.5,
            }}
          >
            {formattedDate}
          </Typography>
          <IconButton
            sx={{
              color: "#FFFFFF",
            }}
          >
            <NotificationsIcon />
          </IconButton>
          <SearchBar setSearchQuery={setSearchQuery}></SearchBar>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
