import "./App.css";
import { Routes, Route } from "react-router";
import Dashboard from "./pages/dashboard.tsx";
import Sidebar from "./components/Sidebar.tsx";
import MyForms from "./pages/my-forms.tsx";
import Library from "./pages/library.tsx";
import Activity from "./pages/activity.tsx";
import Settings from "./pages/settings.tsx";
import Profile from "./pages/profile.tsx";
//import Navbar from "./components/Navbar.tsx";

function App() {
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
