import React, { useEffect, useState } from "react";
import "../styles/ChatBox.css";
import ResponseChat from "./ResponseChat";
import SentChat from "./SentChat";
import basys_logo from "../assests/basys_logo.webp";
import axios from "axios";

function ChatBox({ chatList, setChatList }) {
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    console.log(text);
    const newList = [...chatList, { role: "user", message: text }];
    setChatList(newList);
    
    try {
      const response = await axios.post("http://localhost:4000/api/message", {
        message: text,
      });
      const newList = [
        ...chatList,
        {
          role: "user",
          message: text,
        },
        {
          role: "bot",
          message: response.data.message,
        },
      ];
      setText("");
      console.log(response);
      setChatList(newList);
      console.log(newList);
      // console.log(newList);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="chat-box">
      <img src={basys_logo} alt="logo" />
      <div className="chat-header">
        <h1>basysGPT</h1>
      </div>
      <div className="chats">
        {chatList.map((chat, index) => {
          return (
            <div
              key={index}
              className={
                chat.role === "user"
                  ? "message sender-message"
                  : "message receiver-message"
              }
            >
              <p>
                {chat.role === "user" ? (
                  <SentChat text={chat.message} />
                ) : (
                  <ResponseChat text={chat.message} />
                )}
              </p>
            </div>
          );
        })}
      </div>
      <div className="text-area">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Enter your message"
        />
        <button onClick={handleSubmit}>➤</button>
      </div>
    </div>
  );
}

export default ChatBox;
