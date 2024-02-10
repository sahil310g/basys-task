import React, { useState } from "react";
import "../styles/ChatBox.css";
import ResponseChat from "./ResponseChat";
import SentChat from "./SentChat";
import basys_logo from "../assests/basys_logo.webp";

function ChatBox({ chatList, setChatList }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    console.log(text);
    const newList = [...chatList, { role: "user", message: text }];
    setChatList(newList);
    setText("");
};

  return (
    <div className="chat-box">
      <div className="chat-header">
        <img src={basys_logo} />
        <h1>basysGPT</h1>
      </div>
      <div className="chats">
        <ResponseChat
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quis nulla voluptates animi doloribus vitae id molestiae laudantium placeat reprehenderit aliquid."
          }
        />
        <SentChat
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quis nulla voluptates animi doloribus vitae id molestiae laudantium placeat reprehenderit aliquid."
          }
        />
        <ResponseChat
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quis nulla voluptates animi doloribus vitae id molestiae laudantium placeat reprehenderit aliquid."
          }
        />
        <SentChat
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quis nulla voluptates animi doloribus vitae id molestiae laudantium placeat reprehenderit aliquid."
          }
        />
        <ResponseChat
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quis nulla voluptates animi doloribus vitae id molestiae laudantium placeat reprehenderit aliquid."
          }
        />
        <SentChat
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quis nulla voluptates animi doloribus vitae id molestiae laudantium placeat reprehenderit aliquid."
          }
        />
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
