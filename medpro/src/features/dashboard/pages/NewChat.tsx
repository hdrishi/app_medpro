import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import "../styles/NewChat.css";
import { useNavigate } from "react-router-dom";
import medprotext from "../../../medpro-text.png";
import { useChat, FileType } from "../../chats/components/ChatContext";

const NewChat = () => {
  const navigate = useNavigate();

  const { selectedItem, setSelectedItem, files, setFiles, userInput, setUserInput } = useChat();
  
const handleNavigation = (event: any) => {
  event.preventDefault();

  // Send data to next page
  navigate("/chat-window", {
    state: {
      selectedItem,
      files,
      userInput,
    },
  });

  /* ------------------- RESET ------------------- */
  setUserInput("");
  setFiles([]);
  setSelectedItem(null);
};




  // Allowed extensions
  const allowedExtensions = ["jpg", "jpeg", "png", "pdf", "csv"];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;

    const fileArray = Array.from(selectedFiles);

    const validFiles: FileType[] = Array.from(selectedFiles).map((f) => ({
      name: f.name,
      type: f.type,
      size: f.size,
      ext: f.name.split(".").pop()?.toLowerCase() || "",
    }));

    /* Validate extensions */
    if (!validFiles.every((f) => allowedExtensions.includes(f.ext))) {
      alert("Invalid file type! Allowed: JPG, JPEG, PNG, PDF, CSV.");
      event.target.value = "";
      return;
    }

    // Prevent mixing extensions
    if (files.length > 0) {
      const currentExt = files[0].ext;
      if (validFiles.some((f) => f.ext !== currentExt)) {
        alert("All uploaded files must have the same extension.");
        event.target.value = "";
        return;
      }
    }

    /* Check individual image size ≤ 3.5 MB */
    const imageExtensions = ["jpg", "jpeg", "png"];
    if (validFiles.some((f) => imageExtensions.includes(f.ext) && f.size > 3.5 * 1024 * 1024)) {
      alert("Images cannot exceed 3.5 MB each.");
      event.target.value = "";
      return;
    }

    /* Check total size ≤ 10 MB */
    const totalSize = files.reduce((acc, f) => acc + f.size, 0) + validFiles.reduce((acc, f) => acc + f.size, 0);
    if (totalSize > 10 * 1024 * 1024) {
      alert("Total uploaded files cannot exceed 10 MB.");
      event.target.value = "";
      return;
    }

    /* Add files to state */
    setFiles((prev: FileType[]) => [...prev, ...validFiles]);
    event.target.value = ""; // Reset input
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const getFileClass = (ext: string) => {
    switch (ext) {
      case "pdf":
        return "file-badge pdf-text pdf";
      case "jpg":
      case "jpeg":
        return "file-badge jpg-text jpg";
      case "png":
        return "file-badge png-text png";
      case "csv":
        return "file-badge csv-text csv";
      default:
        return "file-badge other-text other";
    }
  };

  const formatFileSize = (size: number) => {
    if (size < 1024) return size + " B";
    else if (size < 1024 * 1024) return (size / 1024).toFixed(1) + " KB";
    else return (size / (1024 * 1024)).toFixed(1) + " MB";
  };

  const getFileLabel = (ext: string) => ext.toUpperCase();

  return (
    <React.Fragment>
      <div className="welcome-message">
        <span className="welcome verdana-text">Welcome to</span>
        <img src={medprotext} className="brand-name" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0.5rem",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "80px",
          maxWidth: "72vw"
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
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            style={{
              flex: 1,
              resize: "none",
              padding: "1rem",
              boxSizing: "border-box",
              border: "none",
              borderRadius: "10px",
              outline: "none",
              fontSize: "1rem",
              fontFamily: "inherit",
              marginRight: "8px",
              width: "100%",
              bottom: "1rem",
              backgroundColor: "white",
            }}
          />
          {files.length > 0 && (
            <div className="uploaded-file-container">
              {files.map((file, index) => (
                <div
                  key={index}
                  className={`${getFileClass(file.ext)} uploaded-file`}
                >
                  <span className={`text-90 ${getFileClass(file.ext)}`}>
                    {getFileLabel(file.ext)}
                  </span>
                  <div className="file-info">
                    <span className="file-name">{file.name}</span>
                    <span className="file-size">
                      {formatFileSize(file.size)}
                    </span>
                  </div>
                  <div
                    className="remove-btn"
                    onClick={() => handleRemoveFile(index)}
                  >
                    <i className="bi bi-dash-circle-fill fs-20"></i>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div
            style={{
              position: "relative",
              bottom: "0px",
              paddingBottom: "0.3rem",
              width: "100%",
              display: "flex",
              backgroundColor: "white",
              top: "-8px",
              height: "2.5rem",
            }}
          >
            <label
              htmlFor="fileUploader"
              className="custom-file-upload"
              id="attachFile"
            >
              <div className="chatbox-square">
                <i className="bi bi-plus fs-25 color-primary"></i>
              </div>
            </label>
            <input
              id="fileUploader"
              type="file"
              accept=".jpg,.jpeg,.png,.pdf,.csv"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <Dropdown
              className="new-chat-icon"
              style={{ backgroundColor: "none !important" }}
            >
              <Dropdown.Toggle id="dropdown-basic">
                <div className={selectedItem ? "dropdown-selected" : "chatbox-square"} >
                  <i className="bi bi-stars fs-15 color-primary"></i>
                </div>
              </Dropdown.Toggle>

                <Dropdown.Menu>
                  {[
                  "Code review and Standarization",
                  "Q&A of Content and Documents",
                  "Search",
                  "Text Summarization"
                    ].map((item, idx) => (
                  /* Added toggle/deselect logic for all dropdown items */
                  <Dropdown.Item
                    key={idx}
                    active={selectedItem === item} // ✅
                    onClick={() => setSelectedItem(selectedItem === item ? null : item)} // ✅
                  >
                    {item}
                  </Dropdown.Item>
                  ))}
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-2">Content Generation</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Document Comparision</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div
              className="justify-content-center send-container"
              style={{ flex: 1 }}
            ></div>
            <div
              className="justify-content-end"
              style={{ marginRight: "0.75rem", marginTop: "5px" }}
            >
              <div className="chatbox-square-send" onClick={handleNavigation} >
                <i className="bi bi-arrow-right send-icon"></i>
              </div>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default NewChat;
