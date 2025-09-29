import React from "react";
import "../styles/Chats.css";
import { useNavigate } from "react-router-dom";

const ChatHistory = () => {
  const navigate = useNavigate();
  const handleNavigation = (event: any) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <React.Fragment>
      <div className="create-chat-container">
        <div className="text start">
          <h2>Chat History</h2>
          <ul>
            <li>Chat 1</li>
            <li>Chat 2</li>
            <li>Chat 3</li>
            <li>Chat 4</li>
          </ul>
        </div>
        <div className="position-absolute top-0 mt-2 pe-4 end-0">
          <i
            className="bi bi-x-lg"
            onClick={handleNavigation}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default ChatHistory;
