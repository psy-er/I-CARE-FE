import React, { useState } from "react";
import Header from "../Header";
import PageFirst from "../PageFirst";
import ChatBot from "./ChatBot";
import "./css/ChatBotStart.css";
import { deleteChat } from "./api/api-chatbot";
import MSelectTopic from "./modal/MSelectTopic";
import { useNavigate } from "react-router-dom";

const ChatBotStart = () => {
  const navigate = useNavigate();
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

  const handleClick = () => {
    navigate('/chatbot/feedback');
  }

  return (
    <PageFirst>
      <Header title="AI 대화" type="home" />
      {start ? (
        <div>
          <div className="topic">
            현재 상황은 '{topic}'입니다.
          </div>
          <ChatBot />
        </div>
      ) : (
        <div className="chatbotStart">
          <button onClick={handleOpenPopup} className="startButton">
            대화 시작
          </button>
          <button className="feedbackButton" onClick={handleClick}>
            피드백 목록
          </button>
          <MSelectTopic isOpen={isPopupOpen} onClose={handleClosePopup}
            onSelectTopic={onSelectTopic} />
        </div>
      )}
    </PageFirst>
  );
}

export default ChatBotStart;