import "./App.css";
import { Routes, Route } from "react-router";
import Dashboard from "./pages/dashboard.tsx";
import ContentForm from "./pages/content-form.tsx";
import EmployeesForm from "./pages/employees-form.tsx";
import NewEmployeeForm from "./components/EmployeeForm_New.tsx";
import UnderWriterPortal from "./pages/underwriter-portal.tsx";
import AnalystPortal from "./pages/analyst-portal.tsx";
import ContentGrid from "./components/ContentGrid.tsx";
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
import Sidebar from "./components/Sidebar.tsx";
import MyForms from "./pages/my-forms.tsx";
import Library from "./pages/library.tsx";
import Activity from "./pages/activity.tsx";
import Settings from "./pages/settings.tsx";
import Profile from "./pages/profile.tsx";
//import Navbar from "./components/Navbar.tsx";

function App() {
  // Define the missing handlers
  return (
    <>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
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
    </>
  );
}

export default App;
