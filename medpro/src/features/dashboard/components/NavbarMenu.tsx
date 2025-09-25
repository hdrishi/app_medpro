import React, { useRef, useState } from "react";

const NavbarMenu = () => {
  const notificationsRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  type Notification = {
    id: number;
    message: string;
    read: boolean;
  };

  const initialNotifications: Notification[] = [
    {
      id: 1,
      message: "Notification 1",
      read: false,
    },
    { id: 2, message: "Notification 2", read: true },
    { id: 3, message: "Notification 3", read: true },
  ];

  const [notifications, setNotifications] =
    useState<Notification[]>(initialNotifications);

  const toggleNotifications = () => {
    console.log(isOpen);
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };
  return (
    <React.Fragment>
      <div className="notification-navbar" ref={notificationsRef}>
        <div>
          <i
            className="bi bi-bell h4"
            style={{ padding: "20px" }}
            onClick={toggleNotifications}
          >
            {notifications.length > 0 && (
              <span className="notification-badge">{notifications.length}</span>
            )}
          </i>

          {isOpen && (
            <div className="text-start customPopup">
              <ul className="notification-list">
                {notifications.length === 0 ? (
                  <li className="empty">No Notifications</li>
                ) : (
                  notifications.map((n) => <li key={n.id}>{n.message}</li>)
                )}
              </ul>
            </div>
          )}

          <i className="bi bi-gear h4"></i>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavbarMenu;
