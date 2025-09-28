import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import "../styles/NewChat.css";

const NewChat = () => {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // borderTop: "1px solid rgb(204, 204, 204)",
          padding: "0.5rem",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "80px",
        }}
      >
        <form
          style={{
            width: "60%",
            boxShadow: "0px 3px 6px #00000029",
            borderRadius: "10px",
          }}
        >
          <textarea
            placeholder="How can I help you today?"
            style={{
              flex: 1,
              resize: "none",
              padding: "1rem",
              boxSizing: "border-box",
              border: "none",
              borderRadius: "10px",
              outline: "none",              // border: "1px solid #ccc",
              fontSize: "1rem",
              fontFamily: "inherit",
              marginRight: "8px",
              width: "100%",
              bottom: "1rem",
              backgroundColor: "white",
              // borderBottom: "none",
              //   boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.5)",
            }}
          />

          <div
            style={{
              position: "relative",
              bottom: "0px",
              paddingBottom: "0.3rem",
              width: "100%",
              display: "flex",
              backgroundColor: "white",
              // border: "1px solid #ccc",
              // borderTop: "none",
              top: "-8px",
              height: "2.5rem",
            }}
          >
            <label
              htmlFor="fileUploader"
              className="custom-file-upload"
              id="attachFile"
            >
              <i className="bi bi-paperclip"></i>
            </label>
            <input
              id="fileUploader"
              type="file"
              multiple
              style={{ display: "none;" }}
            />
            <Dropdown
              className="new-chat-icon"
              style={{ backgroundColor: "none !important" }}
            >
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <i className="bi bi-stars"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  Code review and Standarization
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  Content Generation
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Document Comparision
                </Dropdown.Item>
                <Dropdown.Item href="#/action-4">
                  Q&A of Content and Documents
                </Dropdown.Item>
                <Dropdown.Item href="#/action-5">Search</Dropdown.Item>
                <Dropdown.Item href="#/action-5">
                  Text Summarization
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div className="justify-content-center" style={{ flex: 1 }}></div>
            <button
              className="new-chat-icon justify-content-end"
              style={{ right: "1.2em", position: "relative" }}
            >
              <i className="bi bi-send-fill"></i>
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default NewChat;
