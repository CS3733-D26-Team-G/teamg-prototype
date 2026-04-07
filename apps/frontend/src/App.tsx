import "./App.css";
import Navbar from "./components/Navbar.tsx";
import { Routes, Route } from "react-router";
import Dashboard from "./pages/dashboard.tsx";
import Sidebar from "./components/Sidebar.tsx";
//import HeroSection from ".components/HeroSection.tsx"
import MyForms from "./pages/my-forms.tsx";
import Library from "./pages/library.tsx";
import Activity from "./pages/activity.tsx";
import Settings from "./pages/settings.tsx";
import Profile from "./pages/profile.tsx";
//import Navbar from "./components/Navbar.tsx";
import ContentGrid from "./components/ContentGrid.tsx";
import { type GridColDef } from "@mui/x-data-grid";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "firstName", headerName: "First Name", width: 150 },
  { field: "lastName", headerName: "Last Name", width: 150 },
];
const myRows = [
  { id: 1, firstName: "Colin" },
  { id: 2, firstName: "Isabelle" },
  { id: 3, firstName: "Emmy" },
];

function App() {

  const handleEdit = (row: any) => console.log('Editing', row);
  const handleDelete = (id: string | number) => console.log('Deleting', id);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <ContentGrid></ContentGrid>
          {/*<Navbar />*/}
          <Routes>
            <Route
              path="/"
              element={<Dashboard />}
            />
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
            <Route
              path="/my-forms"
              element={<MyForms />}
            />
            <Route
              path="/library"
              element={<Library />}
            />
            <Route
              path="/activity"
              element={<Activity />}
            />
            <Route
              path="/settings"
              element={<Settings />}
            />
            <Route
              path="/profile"
              element={<Profile />}
            />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
