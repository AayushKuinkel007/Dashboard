import React from "react";
import HeaderComponent from "./Dashboard/HeaderComponent";
import SidebarComponent from "./Dashboard/SidebarComponent";
import FooterComponent from "./Dashboard/FooterComponent";



const WeblayoutComponent = ({ children }) => {
  return (
    <>
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <HeaderComponent/>
        <div className="d-flex flex-grow-1">
          <SidebarComponent/>
          <main className="flex-grow-1 p-4 bg-light">{children}</main>
        </div>
        <FooterComponent/>
      </div>
    </>
  );
};

export default WeblayoutComponent;
