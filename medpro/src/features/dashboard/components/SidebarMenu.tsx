import { Nav } from "react-bootstrap";
import React, { useState } from "react";
import NewChat from "../pages/NewChat";
import CreateChat from "../../chats/components/CreateChat";
import { Link, Outlet } from "react-router-dom";

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
            // <Nav>
            //   <ul>
            //     <li>New Chat</li>
            //     <li>Chat</li>
            //     <li>Prompt</li>
            //   </ul>
            // </Nav>
            <nav>
              <Link to="/" className="nav-link">
                New Chat
              </Link>
              <Link to="/chat-history" className="nav-link">
                Chat History
              </Link>
              <Link to="/prompts" className="nav-link">
                Prompts
              </Link>
            </nav>
          )}
        </div>
        <div className={`content ${sidebarCollapsed ? "expanded" : ""}`}>
          {/* <NewChat /> */}
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SidebarMenu;
