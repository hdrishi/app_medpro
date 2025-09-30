import React, { useState } from "react";
import "../styles/Chats.css";
import { useNavigate } from "react-router-dom";

interface Chat {
  id: number;
  summary: string;
  lastAccessed: string;
}

const chats: Chat[] = [
  { id: 1, summary: "Describe the incident that let to your claim in detail.", lastAccessed: "2025-10-13T10:15:00Z" },
  { id: 2, summary: "This is a new option that uses Meta AI to privately and quickly summarize unread messages in a chat, so you can get an idea of what is happening.", lastAccessed: "2025-10-10T18:45:00Z" },
  { id: 3, summary: "A new option that uses Meta AI to privately and quickly summarize unread messages in a chat, so you can get an idea of what is happening.", lastAccessed: "2025-10-05T12:30:00Z" },
  { id: 4, summary: "As a new option that uses Meta AI to privately.", lastAccessed: "2025-09-28T10:15:00Z" },
  { id: 5, summary: "This is a new option that uses Meta AI to privately and quickly summarize unread messages in a chat, so you can get an idea of what is happening.", lastAccessed: "2025-09-27T18:45:00Z" },
  { id: 6, summary: "A new option that uses Meta AI to privately and quickly summarize unread messages in a chat, so you can get an idea of what is happening.", lastAccessed: "2025-09-26T12:30:00Z" },
  { id: 7, summary: "As a new option that uses Meta AI to privately and quickly summarize unread messages in a chat, so you can get an idea of what is happening.", lastAccessed: "2025-09-28T10:15:00Z" },
  { id: 8, summary: "This is a new option that uses Meta AI to privately and quickly summarize unread messages in a chat, so you can get an idea of what is happening.", lastAccessed: "2025-09-27T18:45:00Z" },
  { id: 9, summary: "A new option that uses Meta AI to privately and quickly summarize unread messages in a chat, so you can get an idea of what is happening.", lastAccessed: "2025-09-26T12:30:00Z" },
  { id: 10, summary: "As a new option that uses Meta AI to privately and quickly summarize unread messages in a chat, so you can get an idea of what is happening.", lastAccessed: "2025-09-28T10:15:00Z" },
  { id: 11, summary: "This is a new option that uses Meta AI to privately and quickly summarize unread messages in a chat, so you can get an idea of what is happening.", lastAccessed: "2025-09-27T18:45:00Z" },
  { id: 12, summary: "A new option that uses Meta AI to privately and quickly summarize unread messages in a chat, so you can get an idea of what is happening.", lastAccessed: "2025-09-26T12:30:00Z" },
  { id: 13, summary: "As a new option that uses Meta AI to privately and quickly summarize unread messages in a chat, so you can get an idea of what is happening.", lastAccessed: "2025-09-28T10:15:00Z" },
  { id: 14, summary: "This is a new option that uses Meta AI to privately and quickly summarize unread messages in a chat, so you can get an idea of what is happening.", lastAccessed: "2025-09-27T18:45:00Z" },
  { id: 15, summary: "A new option that uses Meta AI to privately and quickly summarize unread messages in a chat, so you can get an idea of what is happening.", lastAccessed: "2025-09-26T12:30:00Z" },
  { id: 16, summary: "As a new option that uses Meta AI to privately and quickly summarize unread messages in a chat, so you can get an idea of what is happening.", lastAccessed: "2025-09-28T10:15:00Z" }
];

const ChatHistory = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleNavigation = (event: any) => {
    event.preventDefault();
    navigate("/");
  };

  // Helper function to format date as dd-mm-yyyy
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // months are 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const filteredChats = chats.filter(
    (chat) =>
      chat.summary.toLowerCase().includes(search.toLowerCase()) ||
      formatDate(chat.lastAccessed).includes(search)
  );

  return (
    <div className="create-chat-container">
      <div className="text start ">
        <span className="chat-container-title">Chat History</span>

        {/* Search Bar with Lens Icon */}
        <div className="search-container">
          <input type="text"
            placeholder="Search chats..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input" />
          <i className="bi bi-search search-icon"></i>
        </div>
        {/* Chat List */}
          <div className="chat-list">
            {filteredChats.length > 0 ? (
              filteredChats.map((chat) => (
                <div key={chat.id} className="chat-item">
                  <div className="d-flex flex-column">
                    <span className="summary">{chat.summary}</span>
                    <span className="accessed">Last updated on: {formatDate(chat.lastAccessed)}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="chat-item">No chats found</div>
            )}
          </div>
      </div>

      {/* Close Button */}
      <div>
        <i
          className="bi bi-x-lg"
          onClick={handleNavigation}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default ChatHistory;
