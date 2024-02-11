import './App.css';
import ChatBox from './components/ChatBox';
import { useState } from 'react';

function App() {
  const [chatList, setChatList] = useState([]);
  return (
    <div>
      <ChatBox chatList={chatList} setChatList={setChatList} />
    </div>
  );
}

export default App;
