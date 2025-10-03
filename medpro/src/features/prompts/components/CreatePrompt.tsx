import React from "react";
import "../styles/Prompts.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreatePrompt = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="prompt-container">
        <div className="text-start ">
          <div className="prompt-container-title">Create Prompt</div>
          <div style={{ fontSize: "12px" }}>
            <span style={{ color: "#ff0000" }}>*</span> All fields are mandatory
          </div>
        </div>
        <div className="prompt-create-contents">
          <div className="d-flex mb-3 align-items-center">
            <div style={{ width: "20%" }}>
              <span style={{ color: "#ff0000" }}>*</span> Prompt title
            </div>
            <div style={{ width: "80%" }}>
              <input
                type="text"
                placeholder="Enter prompt title"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #c3c3c3",
                  borderRadius: "25px",
                }}
              />
            </div>
          </div>
          <div className="d-flex mb-3 align-items-center">
            <div style={{ width: "20%" }}>
              <span style={{ color: "#ff0000" }}>*</span> Prompt category
            </div>
            <div style={{ width: "80%" }}>
              <select
                className="select-promptdept"
                name="depts"
                id="dept-select"
                style={{ width: "100%", padding: "10px", borderRadius: "25px" }}
              >
                <option value="">All</option>
                <option value="1">Claims</option>
                <option value="2">Hr</option>
                <option value="3">Underwriting</option>
                <option value="4">Example 1</option>
                <option value="5">Example 2</option>
              </select>
            </div>
          </div>
          <div className="d-flex mb-3 align-items-center">
            <div style={{ width: "20%" }}>
              <span style={{ color: "#ff0000" }}>*</span> Description
            </div>
            <div style={{ width: "80%" }}>
              <Form>
                <Form.Group className="mb-3" controlId="myTextarea">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message here..."
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
          <div
            className="d-flex align-items-center justity-content-center mb-3"
            style={{ justifyContent: "center" }}
          >
            <button
              className="btn-promptcreation"
              onClick={() => navigate("/prompt-create")}
            >
              Create Prompt
            </button>
            <button
              className="btn-promptcreation"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreatePrompt;
