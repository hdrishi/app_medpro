import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import "../styles/NewChat.css";

const NewChat = () => {

  const [files, setFiles] = useState<{ name: string; type: string; size: number }[]>([]);

  // Allowed extensions
  const allowedExtensions = ["jpg", "jpeg", "doc", "docx", "pdf"];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;

    const fileArray = Array.from(selectedFiles);

    // Filter valid files
    const validFiles = fileArray.filter(file => {
      const ext = file.name.split(".").pop()?.toLowerCase();
      return ext && allowedExtensions.includes(ext);
    });

    if (validFiles.length !== fileArray.length) {
      alert(
        "Invalid file type detected! Only JPG, JPEG, DOC, DOCX, and PDF are allowed."
      );
    }

    if (files.length + validFiles.length > 2) {
      alert("You can only upload a maximum of 2 files.");
      return;
    }

    setFiles(prev => [...prev, ...validFiles.map(f => ({ name: f.name, type: f.type, size: f.size }))]);

    // Reset input so the same file can be reselected if removed
    event.target.value = "";
  };

  const handleRemoveFile = (index: number) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const getFileClass = (fileName: string) => {
    const ext = fileName.split(".").pop()?.toLowerCase();

    switch (ext) {
      case "pdf":
        return "file-badge pdf-text pdf";
      case "jpg":
      case "jpeg":
        return "file-badge jpg-text jpg";
      case "doc":
      case "docx":
        return "file-badge doc-text doc";
      default:
        return "file-badge other-text other";
    }
  };

    const formatFileSize = (size: number) => {
    if (size < 1024) return size + " B";
    else if (size < 1024 * 1024) return (size / 1024).toFixed(1) + " KB";
    else return (size / (1024 * 1024)).toFixed(1) + " MB";
  };

  const getFileLabel = (fileName: string) => {
    const ext = fileName.split(".").pop()?.toLowerCase();

    switch (ext) {
      case "pdf":
        return "PDF";
      case "jpg":
      case "jpeg":
        return "JPG";
      case "doc":
      case "docx":
        return "DOC";
      default:
        return "FILE";
    }
  };
    
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
       {files.length > 0 && (
        <div className="uploaded-file-container">
          {files.map((file, index) => (
            <div key={index} className={`${getFileClass(file.name)} uploaded-file`}>
              <span className={`text-90 ${getFileClass(file.name)}`}>{getFileLabel(file.name)}</span>
              <div className="file-info">
                <span className="file-name">{file.name}</span>
                <span className="file-size">{formatFileSize(file.size)}</span>
              </div>
              <div className="remove-btn" onClick={() => handleRemoveFile(index)}>
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
              <div className="chatbox-square"><i className="bi bi-plus fs-25 color-primary"></i></div>
            </label>
            <input
              id="fileUploader"
              type="file"
              accept=".jpg,.jpeg,.doc,.docx,.pdf"
              onChange={handleFileChange}
              disabled={files.length >= 2} // disable if already 2 files
              style={{ display: "none;" }}
            />
            <Dropdown
              className="new-chat-icon"
              style={{ backgroundColor: "none !important" }}
            >
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <div className="chatbox-square"><i className="bi bi-stars fs-15 color-primary"></i></div>
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

            <div className="justify-content-center send-container" style={{ flex: 1 }}></div>
            <div className="justify-content-end" style={{ marginRight: "0.75rem", marginTop: "5px" }}>
              <div className="chatbox-square-send"><i className="bi bi-arrow-right send-icon"></i></div>
            </div>
              
            
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default NewChat;
