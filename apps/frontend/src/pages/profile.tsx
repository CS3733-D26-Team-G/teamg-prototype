import { useState } from "react";
import SearchBar from "./DashboardComponents/SearchBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

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
      {/*Top Header Bar*/}
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
        {/*'My Account text in header'*/}
        <Typography
          variant="h4"
          sx={{
            color: "#FFFFFF",
            p: 2,
          }}
        >
          My Account
        </Typography>

        {/*All components on the right side of the header bar*/}
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

      {/*Profile Tag Bar*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          height: 200,
          mx: "auto",
          backgroundColor: "#FFFBEF",
          mt: 2,
          borderRadius: 4,
          border: "2px solid black",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={3}
        >
          <Box
            sx={{
              pl: 3,
            }}
          >
            <Avatar
              sx={{
                width: 180,
                height: 180,
              }}
            />
          </Box>
          <Stack>
            <Typography
              sx={{
                fontSize: 64,
                fontWeight: 500,
                lineHeight: 1.1,
                ml: -0.8,
              }}
            >
              Colin Truong
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              cptruong@wpi.edu
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 500,
                mt: 0.5,
              }}
            >
              Business Analyst
            </Typography>
          </Stack>
        </Stack>

        {/*User stats on the right*/}
        <Stack
          sx={{
            pr: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: 36,
              fontWeight: 400,
            }}
          >
            Drafts: 12
          </Typography>
          <Typography
            sx={{
              fontSize: 36,
              fontWeight: 400,
            }}
          >
            Published: 10
          </Typography>
          <Typography
            sx={{
              fontSize: 36,
              fontWeight: 400,
            }}
          >
            Pending: 3
          </Typography>
        </Stack>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "90%",
          height: 225,
          mx: "auto",
          backgroundColor: "#FFFBEF",
          mt: 2,
          borderRadius: 4,
          border: "2px solid black",
        }}
      >
        <Stack>
          <Typography
            sx={{
              fontSize: 36,
              fontWeight: 500,
              pl: 1,
              pt: 0.5,
              pb: 0.3,
            }}
          >
            Personal Information
          </Typography>
          <Stack
            direction="row"
            spacing={45}
            sx={{
              pl: 9.5,
            }}
          >
            <Typography>First Name</Typography>
            <Typography>Last Name</Typography>
            <Typography>Date of Birth</Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default Profile;
