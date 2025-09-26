import { Nav } from "react-bootstrap";
import React, { useState } from "react";
import NewChat from "../pages/NewChat";

const SidebarMenu = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <React.Fragment>
      <div className="container">
        <div className={`sidebar-menu ${sidebarCollapsed ? "collapsed" : ""} `}>
          <button
            style={{ width: "100%" }}
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="toggle-btn h4"
          >
            {sidebarCollapsed ? "→" : "←"}
          </button>
          {!sidebarCollapsed && (
            <Nav>
              <ul>
                <li>New Chat</li>
                <li>Chat</li>
                <li>Prompt</li>
              </ul>
            </Nav>
          )}
        </div>
        <div className={`content ${sidebarCollapsed ? "expanded" : ""}`}>
          <h1 style={{ textAlign: "center" }}>Welcome to MedPro</h1>
          <NewChat />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SidebarMenu;
