import "./App.css";
import Navbar from "./components/Navbar.tsx";
import { Routes, Route } from "react-router";
import Dashboard from "./pages/dashboard.tsx";
import ContentForm from "./pages/content-form.tsx";
import EmployeesForm from "./pages/employees-form.tsx";
import NewEmployeeForm from "./components/EmployeeForm_New.tsx"
import UnderWriterPortal from "./pages/underwriter-portal.tsx";
import AnalystPortal from "./pages/analyst-portal.tsx";
import ContentGrid from "./components/ContentGrid.tsx";
import { type GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
];
const myRows = [
  { id: 1, firstName: 'Colin' },
  { id: 2, firstName: 'Isabelle' },
  { id: 3, firstName: 'Emmy' },
];

function App() {

  // Define the missing handlers
  const handleEdit = (row: any) => console.log('Editing', row);
  const handleDelete = (id: string | number) => console.log('Deleting', id);
  return (
    <>
      <div>
        <ContentGrid></ContentGrid>
        {/* <Navbar />
        <Routes>
          <Route
            path="/"a
            element={<Dashboard />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/content"
            element={<ContentForm />}
          />
          <Route
            path="/employees"
            element={<EmployeesForm />}
          />
          <Route
            path="/underwriter"
            element={<UnderWriterPortal />}
          />
          <Route
            path="/analyst"
            element={<AnalystPortal />}
          />
        </Routes> */}

      </div>
    </>
  );
}

export default App;
