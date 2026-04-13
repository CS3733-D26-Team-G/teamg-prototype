import { useState } from "react";
import DashboardRecentActivity from "./DashboardComponents/DashboardRecentActivity";
import SearchBar from "./DashboardComponents/SearchBar";
import "./DashboardComponents/dashboard.css";
import DashboardToDo from "./DashboardComponents/DashboardToDo.tsx";
import "../index.css";
import "../App.css";

export default function Dashboard() {
  const [_searchQuery, setSearchQuery] = useState("");

  return (
    <div className="dashboard-main">
      <div className="dashboard-header">
        <h2>Welcome back to iBank!</h2>
        <h1>Manage and publish</h1>
        <h1>content with ease</h1>
        <SearchBar setSearchQuery={setSearchQuery}></SearchBar>
      </div>
      <div className="dashboard-activity">
        <DashboardRecentActivity />
      </div>
      <div className="fixed bottom-[10%] left-[30%]">
        <DashboardToDo />
      </div>
    </div>
  );
}
