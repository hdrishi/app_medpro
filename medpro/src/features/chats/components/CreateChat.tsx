import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreateChat = () => {
  const navigate = useNavigate();
  const handleNavigation = (event: any) => {
    event.preventDefault();
    navigate("chat-history");
  };

  return (
    <React.Fragment>
      <div>
        Create Chat Component
        <br />
        <Button variant="primary" onClick={(e) => handleNavigation}>
          Create New Chat
        </Button>
      </div>
    </React.Fragment>
  );
};

export default CreateChat;
