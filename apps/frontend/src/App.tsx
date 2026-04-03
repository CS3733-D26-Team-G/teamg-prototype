import './App.css'
import Navbar from "./components/Navbar.tsx";
import { Routes, Route } from "react-router";
import Dashboard from "./pages/dashboard.tsx";
import ContentForm from "./pages/content-form.tsx";
import EmployeeForm from "./pages/employee-form.tsx";
import UnderWriterPortal from "./pages/underwriter-portal.tsx";
import AnalystPortal from "./pages/analyst-portal.tsx";

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/content" element={<ContentForm />} />
            <Route path="/employees" element={<EmployeeForm/>} />
            <Route path="/underwriter" element={<UnderWriterPortal />} />
            <Route path="/analyst" element={<AnalystPortal />} />
        </Routes>
      </div>
    </>
  )
}

export default App;