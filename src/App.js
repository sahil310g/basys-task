import './App.css';
import ChatBox from './components/ChatBox';
import { useState } from 'react';

function App() {
  const [chatList, setChatList] = useState([{
    role:"bot",
    message:"Welcome to basysGPT, how may I help you."
  }]);
  return (
    <div>
      <ChatBox chatList={chatList} setChatList={setChatList} />
    </div>
  );
}

export default App;
