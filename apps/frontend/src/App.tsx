import "./App.css";
import { Routes, Route } from "react-router";
import Dashboard from "./pages/dashboard.tsx";
import Sidebar from "./components/Sidebar.tsx";
import MyForms from "./pages/my-forms.tsx";
import Library from "./pages/library.tsx";
import Activity from "./pages/activity.tsx";
import Settings from "./pages/settings.tsx";
import Profile from "./pages/profile.tsx";
import LoginFrThisTime from "./pages/Login.tsx";
import Hero from "./pages/hero.tsx";

//import Navbar from "./components/Navbar.tsx";
import ContentGrid from "./components/Management/EmployeeManagement.tsx";
import { type GridColDef } from "@mui/x-data-grid";
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
  const handleEdit = (row: any) => console.log("Editing", row);
  const handleDelete = (id: string | number) => console.log("Deleting", id);
  return (
    <>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          {/*<Navbar />*/}
          <Routes>
            <Route
              path="/login"
              element={<Hero />}
            />

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
    </>
  );
}

export default App;
