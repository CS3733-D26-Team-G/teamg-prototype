import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      dark: "#1A1E4B",
      main: "#395176",
      light: "#C6DAF0",
      contrastText: "#FFF",
    },
    secondary: {
      dark: "#4B1A26",
      main: "#74414e",
      light: "#bea5aa",
    },
    error: {
      main: "#FF0050",
    },
  },
  typography: {
    fontFamily: "Playfair Display",
    h1: {
      fontFamily: "Playfair Display",
      fontWeight: "bold",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          "color": "#00779D",
          "textDecoration": "none",
          "&:hover": {
            color: "#00C1FF",
            textDecoration: "underline",
          },
        },
      },
      defaultProps: {
        underline: "hover",
      },
    },
  },
});

export default theme;
