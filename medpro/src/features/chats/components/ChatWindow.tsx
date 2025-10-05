import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../dashboard/styles/NewChat.css";
import "../styles/ChatWindow.css";

interface Message {
  sender: "user" | "bot";
  text: string;
  files?: Array<File | { name: string; size: number; type?: string; ext: string }>;
}

const ChatWindow = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedItem, files, userInput } = location.state || {};

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const initialMessageSent = useRef(false);

  // ✅ Ref for chat container
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // ✅ Scroll to bottom when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initial message setup
  useEffect(() => {
    if ((userInput || files?.length || selectedItem) && !initialMessageSent.current) {
      initialMessageSent.current = true;

      const initialMessageText = `Prompt: ${userInput || "(empty)"}\nDropdown: ${
        selectedItem || "(none)"
      }`;

      const initialMessage: Message = {
        sender: "user",
        text: initialMessageText,
        files: files || [],
      };

      setMessages([initialMessage]);

      // Bot reply after delay
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: `Bot Reply: I received your initial input.` },
        ]);
      }, 500);
    }
  }, [userInput, selectedItem, files]);

  // Send message handler
  const handleSendMessage = () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const newMessage: Message = { sender: "user", text: trimmedInput };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: `Bot Reply: I received your message "${trimmedInput}"` },
      ]);
    }, 500);
  };

  const handleNavigation = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
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

  const getFileLabel = (ext: string) => ext.toUpperCase();

  return (
    <div className="create-chat-container-2">
      <div className="d-flex align-items-center justify-content-between position-relative border-bottom head-p-t-0">
        <span className="chat-container-title">{selectedItem || "MedPro Chat Window"}</span>
        <div style={{ maxWidth: "30px" }}>
          <i className="bi bi-x-lg" onClick={handleNavigation} style={{ cursor: "pointer" }} />
        </div>
      </div>

      <div className="width-inherito">
        <div className="d-flex flex-column chat-window-container position-relative">
          {/* Chat Messages */}
          <div className="chat-content list-group">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`list-group-item border-0 ${msg.sender === "user" ? "user-msg" : "bot-msg"}`}
              >
                {/* Message Bubble */}
                <div
                  className={`d-flex align-items-start user-bubble chat-message ${
                    msg.sender === "user" ? "justify-content-end" : "justify-content-start"
                  }`}
                >
                  {/* Bot Avatar */}
                  {msg.sender === "bot" && (
                    <div className="chat-avatar-col me-3 order-1">
                      <i className="bi bi-robot profile-icon-collapsed-bot"></i>
                    </div>
                  )}

                  {/* Chat bubble */}
                  <div
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 10px",
                      padding: "10px",
                      maxWidth: "60vw",
                      borderRadius: "10px",
                    }}
                    className={`chat-bubble-wrapper ${
                      msg.sender === "user" ? "borders-1 order-1" : "borders-2 order-2"
                    }`}
                  >
                    <span className="mess-font">{msg.text}</span>

                    {/* Files */}
                    {msg.files && msg.files.length > 0 && (
                      <div className="uploaded-file-container">
                        {msg.files.map((f, index) => {
                          const ext =
                            f instanceof File
                              ? f.name.split(".").pop()?.toLowerCase()
                              : f.ext?.toLowerCase();

                          return (
                            <div
                              key={index}
                              className={`uploaded-file file-badge ${getFileClass(ext || "")} ${
                                ext || ""
                              }`}
                            >
                              <span className={`text-90 ${ext || ""}`}>
                                {getFileLabel(ext || "")}
                              </span>
                              <div className="file-info">
                                <span className="file-name">{f.name}</span>
                                <span className="file-size">
                                  {(f.size / (1024 * 1024)).toFixed(2)} MB
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Bot Actions */}
                    {msg.sender === "bot" && (
                      <div className="d-flex gap-2 mt-1">
                        <i
                          className="bi bi-hand-thumbs-up"
                          style={{ cursor: "pointer" }}
                          onClick={() => alert("You liked this message")}
                        />
                        <i
                          className="bi bi-hand-thumbs-down"
                          style={{ cursor: "pointer" }}
                          onClick={() => alert("You disliked this message")}
                        />
                        <i
                          className="bi bi-clipboard"
                          style={{ cursor: "pointer" }}
                          onClick={() => navigator.clipboard.writeText(msg.text)}
                        />
                      </div>
                    )}
                  </div>

                  {/* User Avatar */}
                  {msg.sender === "user" && (
                    <div className="chat-avatar-col ms-2 order-2">
                      <div className="profile-icon-collapsed-user">
                        <div className="profile-circle-collapsed-user">
                          <i className="bi bi-person profile-icon-collapsed-user"></i>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {/* ✅ Scroll anchor */}
            <div ref={chatEndRef} />
          </div>
        </div>
      </div>

      {/* Input Box */}
      <form
        className="chat-input-container mt-2 position-absolute send-bu d-flex"
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn btn-primary ms-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
