import React, { useState } from "react";
import Header from "../Header";
import PageFirst from "../PageFirst";
import ChatBot from "./ChatBot";
import { deleteChat } from "./api/api-chatbot";
import MSelectTopic from "./modal/MSelectTopic";

const ChatBotStart = () => {
  const [start, setStart] = useState(false);
  const [topic, setTopic] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  }

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  }

  const onSelectTopic = (topic) => {
    setIsPopupOpen(false);
    deleteChat();
    setTopic(topic);
    setStart(true);
  }

  return (
    <PageFirst>
      <Header title="AI 대화" type="home" />
      {start ? (
        <div>
          <div style={{backgroundColor: '#fff', padding: '10px', border: '1px solid #aaa', borderRadius: '10px'}}>현재 상황은 '{topic}'입니다.</div>
          <ChatBot />
        </div>
      ) : (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <button onClick={handleOpenPopup} 
            style={{backgroundColor: '#6271f5', color: 'white', padding: '15px 20px',
              margin: '20px', border: 'none', 
              borderRadius: '10px', fontSize: '20px'
            }}>대화 시작</button>
          <MSelectTopic isOpen={isPopupOpen} onClose={handleClosePopup}
            onSelectTopic={onSelectTopic} />
        </div>
      )}
    </PageFirst>
  );
}

export default ChatBotStart;