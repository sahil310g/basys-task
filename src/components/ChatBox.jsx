import React, { useEffect, useState } from "react";
import "../styles/ChatBox.css";
import ResponseChat from "./ResponseChat";
import SentChat from "./SentChat";
import basys_logo from "../assests/basys_logo.webp";
import axios from "axios";

function ChatBox({ chatList, setChatList }) {
  const [text, setText] = useState("");

  const getResponse = async (input) => {
    try {
      const response = await axios.post("http://localhost:4000/api/message", {
        message: input,
      });
      const newList = [
        ...chatList,
        {
          role: "user",
          message: input,
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

  const handleSubmit = async () => {
    console.log(text);
    const newList = [...chatList, { role: "user", message: text }];
    setChatList(newList);
    getResponse(text);
  };

  

  const handleClick = () => {
    // Prompt the user for input
    const userInput = window.prompt("Enter the policy ID:");

    // Handle the user input
    if (userInput !== null) {
      var input = `Policy breakdown for policy ID ${userInput}`;
      setChatList([...chatList, {role:"user", message : input}]);
      getResponse(input);

    } else {
      alert("No input provided");
    }
  };

  const handleClick2 = () => {
    // Prompt the user for input
    const userInput = window.prompt("Enter the policy ID:");

    // Handle the user input
    if (userInput !== null) {
      var input = `Missing information for policy ID ${userInput}`;
      setChatList([...chatList, {role:"user", message : input}]);
      getResponse(input);

    } else {
      alert("No input provided");
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

      <div className="buttons">
        <button onClick={handleClick}>Policy Breakdown</button>
        <button onClick={handleClick2}>Missing information</button>
      </div>
    </div>
  );
}

export default ChatBox;
