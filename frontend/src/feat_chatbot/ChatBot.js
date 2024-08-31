import React, { useEffect, useRef, useState } from "react";
import "./css/ChatBot.css";
import { postRequest } from "./api/api-chatbot";
import { postChat } from "./api/api-chatbot-feedback";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ChatBot = (props) => {
  const topic = props.topic.topic;
  const [chat, setChat] = useState({
    request: "",
    chatBotTopicId: props.topic.chatBotTopicId
  });
  const [talks, setTalks] = useState([]);
  const [writable, setWritable] = useState(true);
  const [feedback, setFeedback] = useState("");
  const chatRef = useRef(null);
  const textareaRef = useRef(null);
  const navigate = useNavigate();

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
  };

  const onSubmitRequest = () => {
    setChat({...chat, request: ""});
    setTalks([...talks, chat.request]);
    try {
      postRequest(chat)
        .then((response) => {
          setTalks([...talks, chat.request, response.response]);
      });
    } catch(error) {
      console.error('Error chatbot : ', error);
    }
  };

  const onSubmitChat = () => {
    if(talks.length > 0) {
      setWritable(false);
      document.getElementsByClassName('button2').disabled = true;
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
    <div className="chat-container" ref={chatRef}>
      <div className="topic">
        현재 상황은 '{topic}'입니다.
      </div>
      <div className="chat-talking">
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
          <div style={{display: 'flex', justifyContent: 'flex-start',
            padding: '13px', borderRadius: '15px', margin: '10px',
            backgroundColor: '#272D62', color: 'white', maxWidth: '100%',
            lineHeight: '25px'
          }}>{feedback}</div>
        )}
      </div>
      <div className="chat-bottom">
        <div className="chatfeedback">
          <button className="button1" onClick={handleClick}>피드백 목록</button>
          {writable && (<button className="button2" onClick={onSubmitChat} disabled="">피드백 받기</button>)}
        </div>
        {writable && (
          <div className="chatting">
            <textarea value={chat.request} name="request"
              onChange={onChange} ref={textareaRef}
              placeholder="AI와 대화 후 피드백을 받아보세요." />
            <button className="save" onClick={onSubmitRequest}><ArrowForwardIosIcon /></button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatBot;