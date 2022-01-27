import React from "react";
import Dashboard from "./Dashboard";
import Taskbar from "./Taskbar";
import Navbar from "./Navbar";

function Profile() {
  return (
    <div>
      <div>
        <Navbar />
        <Taskbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default Profile;
