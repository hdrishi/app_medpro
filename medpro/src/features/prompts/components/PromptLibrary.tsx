import React, { useState } from "react";
import "../styles/Prompts.css";
import { useNavigate } from "react-router-dom";
import { Col, Container, Dropdown, Row } from "react-bootstrap";

interface Prompt {
  id: number;
  summary: string;
  lastAccessed: string;
}

const chats: Prompt[] = [
  {
    id: 1,
    summary: "Describe the incident that let to your claim in detail.",
    lastAccessed: "2025-10-13T10:15:00Z",
  },
  {
    id: 2,
    summary:
      "This is a new option that uses Meta AI to privately and quickly summarize unread messages in a chat, so you can get an idea of what is happening.",
    lastAccessed: "2025-10-10T18:45:00Z",
  },
];

const PromptLibrary = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleNavigation = (event: any) => {
    event.preventDefault();
    navigate("/");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const filteredPrompts = chats.filter(
    (chat) =>
      chat.summary.toLowerCase().includes(search.toLowerCase()) ||
      formatDate(chat.lastAccessed).includes(search)
  );

  return (
    <div className="prompt-container">
      <div className="text-start ">
        <span className="prompt-container-title">Prompt Library</span>

        <div className="search-container-prompt">
          <input
            type="text"
            placeholder="Search prompts.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input-prompt"
          />
          <i className="bi bi-search search-icon"></i>
          <select className="select-promptdept" name="depts" id="dept-select">
            <option value="">All</option>
            <option value="1">Claims</option>
            <option value="2">Hr</option>
            <option value="3">Underwriting</option>
            <option value="4">Example 1</option>
            <option value="5">Example 2</option>
          </select>
          <button
            className="btn-promptcreation"
            onClick={() => navigate("/prompt-create")}
          >
            <i className="bi bi-journal-text">Create Prompt</i>
          </button>
        </div>
        <div className="prompt-list">
          {filteredPrompts.length > 0 ? (
            filteredPrompts.map((x) => (
              <div key={x.id} className="prompt-item">
                <div className="d-flex flex-column">
                  <span className="summary">{x.summary}</span>
                  <span className="accessed">
                    Last updated on: {formatDate(x.lastAccessed)}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="prompt-item">No prompt found</div>
          )}
        </div>
      </div>

      {/* Close Button */}
      <div className="position-absolute top-0 mt-2 pe-4 end-0">
        <i
          className="bi bi-x-lg"
          onClick={handleNavigation}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default PromptLibrary;
