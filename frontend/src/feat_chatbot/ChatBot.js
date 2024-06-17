import React, { useEffect, useRef, useState } from "react";
import "./css/ChatBot.css";
import PageFirst from "../PageFirst";
import Header from "../Header";
import { postRequest, postChat, deleteChat } from "./api/api-chatbot";
import { useNavigate } from "react-router-dom";

const ChatBot = () => {
  const [chat, setChat] = useState({
    request: ""
  });
  const [talks, setTalks] = useState([]);
  const [feedback, setFeedback] = useState("");
  const textareaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      deleteChat();
    } catch(error) {
      console.error('Error delete chatting : ', error);
    }
  });

  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [chat.request]);

  const onChange = (e) => {
    setChat({
      ...chat,
      [e.target.name]: e.target.value
    });
  }

  const onSubmitRequest = async () => {
    setChat({request: ""});
    setTalks([...talks, chat.request]);
    try {
      postRequest(chat)
        .then(response => {
          setTalks([...talks, chat.request, response.response]);
      });
    } catch(error) {
      console.error('Error chatbot : ', error);
    }
  };

  const onSubmitChat = () => {
    if(talks != null) {
      try {
        postChat()
          .then(response => {
            setFeedback(response.feedback);
          })
      } catch(error) {
        console.error('Error feedback : ', error);
      }
    }
  };

  const handleClick = () => {
    navigate('/chatbot/feedback');
  }

  return (
    <PageFirst>
      <Header title="AI 대화" type="home" />
      <div>
        <div>현재 상황 : 비가 많이 오는데 자녀가 밖에 나가서 놀고 싶다고 하는 중입니다.</div>
        {talks.map((talk, index) => (
          <div key={index} style={{display: 'flex',
            justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
            padding: '10px'
          }}>
            <div key={index} 
              style={{backgroundColor: index % 2 === 0 ? 'white' : '#6271f5',
                color: index % 2 === 0 ? 'black' : 'white',
                padding: '10px', maxWidth: '60%',
                borderRadius: '10px'
            }}>
              {talk}
            </div>
          </div>
        ))}
        {feedback.length > 0 && (
          <div style={{display: 'flex', justifyContent: 'flex-start', padding: '10px', 
            backgroundColor: '#6271f5', color: 'white', maxWidth: '60%',
            borderRaduis: '10px'
          }}>{feedback}</div>
        )}
      </div>
      <div className="chatfeedback">
        <button className="button1" onClick={handleClick}>피드백 목록</button>
        <button className="button2" onClick={onSubmitChat}>피드백 받기</button>
      </div>
      <div className="chatting">
        <textarea value={chat.request} name="request"
          onChange={onChange} ref={textareaRef}
          placeholder="AI와 대화 후 피드백을 받아보세요." />
        <button className="save" onClick={onSubmitRequest}>^</button>
      </div>
    </PageFirst>
  );
}

export default ChatBot;