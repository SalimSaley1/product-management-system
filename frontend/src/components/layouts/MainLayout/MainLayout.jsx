import React from "react";
import Sidebar from "@components/layouts/Sidebar/Sidebar.jsx";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-content">{children}</div>
    </div>
  );
};

export default MainLayout;
