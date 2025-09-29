import { Nav, Overlay, Popover } from "react-bootstrap";
import React, { useRef, useState } from "react";
import NewChat from "../pages/NewChat";
import "../styles/SidebarMenu.css";
import { Link, Outlet } from "react-router-dom";

const SidebarMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarStyle: React.CSSProperties = {
    width: collapsed ? "54px" : "329px",
    marginLeft: "0px",
    height: "calc(100vh - 95px)",
    background: "#FFFFFF",
    color: "white",
    transition: "width 0.3s",
    position: "relative",
    left: 0,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    boxShadow: "2px 5px 15px #00000029",
    borderRadius: "10px",
    flexWrap: "nowrap",
    padding: "0px 7px",
  };

  const contentStyle: React.CSSProperties = {
    marginLeft: "30px",
    padding: "20px",
    transition: "margin-left 0.3s",
  };

  const toggleBtnStyle: React.CSSProperties = {
    background: "none",
    border: "none",
    color: "black",
    padding: "10px",
    textAlign: "right",
    cursor: "pointer",
    outline: "none",
  };

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const ref = useRef(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setShow(!show);
    setTarget(event.currentTarget);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div style={sidebarStyle}>
          <button
            style={toggleBtnStyle}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (
              <i className="bi bi-arrow-right-circle-fill collapse-icon"></i>
            ) : (
              <i className="bi bi-arrow-left-circle-fill collapse-icon"></i>
            )}
          </button>
          <Nav style={{ display: "grid", rowGap: "5px", alignItems: "center" }}>
            <Link to="/" className="flex-center">
              <i className="bi bi-plus-circle-fill new-chat-icon"></i>
              <span className="menu-text-new-chat">
                {!collapsed && "New Chat"}
              </span>
            </Link>
            <Link to="chat-history" className="flex-center">
              <i className="bi bi-wechat menu-icons"></i>
              <span className="menu-text">{!collapsed && "Chats"}</span>
            </Link>
            <Link to="chat-prompts" className="flex-center">
              <i className="bi bi-journal-text menu-icons"></i>
              <span className="menu-text">{!collapsed && "Library"}</span>
            </Link>
          </Nav>
          {!collapsed && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                maxHeight: "59%",
              }}
            >
              <hr
                style={{ border: "1px solid gray", margin: "80px 0 8px 0" }}
              />
              <div
                className="recent-chats-section"
                style={{ flexGrow: 1, overflowY: "auto" }}
              >
                <Nav
                  style={{
                    display: "grid",
                    rowGap: "5px",
                    alignItems: "center",
                  }}
                >
                  <Nav.Link className="flex-center">
                    <span className="recent-chat">
                      {!collapsed && "Recent Chats"}
                    </span>
                  </Nav.Link>
                  <Nav.Link href="#about" className="flex-center flex-inlin">
                    <i className="bi bi-stars menu-icon m-r-10"></i>
                    <span className="menu-text two-line-ellipsis">
                      {!collapsed &&
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    </span>
                  </Nav.Link>
                  <Nav.Link href="#about" className="flex-center flex-inlin">
                    <i className="bi bi-stars menu-icon m-r-10"></i>
                    <span className="menu-text two-line-ellipsis">
                      {!collapsed &&
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    </span>
                  </Nav.Link>
                  <Nav.Link href="#about" className="flex-center flex-inlin">
                    <i className="bi bi-stars menu-icon m-r-10"></i>
                    <span className="menu-text two-line-ellipsis">
                      {!collapsed &&
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    </span>
                  </Nav.Link>
                  <Nav.Link href="#about" className="flex-center flex-inlin">
                    <i className="bi bi-stars menu-icon m-r-10"></i>
                    <span className="menu-text two-line-ellipsis">
                      {!collapsed &&
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    </span>
                  </Nav.Link>
                  <Nav.Link href="#about" className="flex-center flex-inlin">
                    <i className="bi bi-stars menu-icon m-r-10"></i>
                    <span className="menu-text two-line-ellipsis">
                      {!collapsed &&
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    </span>
                  </Nav.Link>
                  <Nav.Link href="#about" className="flex-center flex-inlin">
                    <i className="bi bi-stars menu-icon m-r-10"></i>
                    <span className="menu-text two-line-ellipsis">
                      {!collapsed &&
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    </span>
                  </Nav.Link>
                  <Nav.Link href="#about" className="flex-center flex-inlin">
                    <i className="bi bi-stars menu-icon m-r-10"></i>
                    <span className="menu-text two-line-ellipsis">
                      {!collapsed &&
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    </span>
                  </Nav.Link>
                  <Nav.Link href="#about" className="flex-center flex-inlin">
                    <i className="bi bi-stars menu-icon m-r-10"></i>
                    <span className="menu-text two-line-ellipsis">
                      {!collapsed &&
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    </span>
                  </Nav.Link>
                </Nav>
              </div>
              {!collapsed && <hr style={{ border: "1px solid gray" }} />}
            </div>
          )}
          {!collapsed ? (
            <div ref={ref} className="profile" onClick={handleClick}>
              <div className="profile-circle">
                <i className="bi bi-person profile-icon"></i>
              </div>
              <div className="profile-info">
                <div className="profile-name">John Doe</div>
                <div className="profile-email">john.doe@genpact.com</div>
              </div>
              <i className="bi bi-chevron-compact-down chev-down"></i>
            </div>
          ) : (
            <div className="profile-icon-collapsed">
              <div className="profile-circle-collapsed">
                <i className="bi bi-person profile-icon-collapsed"></i>
              </div>
            </div>
          )}
          <Overlay
            show={show}
            target={target}
            placement="top"
            container={ref}
            containerPadding={20}
            rootClose
            onHide={() => setShow(false)}
          >
            <Popover id="popover-contained">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                  padding: "10px",
                }}
              >
                <div style={{ color: "black" }}>Get Help</div>
                <div style={{ color: "black" }}>Settings</div>
              </div>
            </Popover>
          </Overlay>
        </div>
        <div className={`content ${collapsed ? "expanded" : ""}`}>
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SidebarMenu;
