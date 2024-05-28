import React, { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import "./css/AddQuestion.css";

const AddQuestion = (props) => {
    const date = new Date(); // 날짜 받아오기 
    const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`; // 오늘 날짜
    const [text, setText] = useState(''); // 글자수
    const [question, setQuestion] = useState({output:""});
    const postQuestion = props.postQuestion;
    
    //글자수
    const handleChange = (e) => {
      console.log(question);
      const { name, value } = e.target;
      setQuestion({
          ...question,
          [name]: value
      });
      setText(value);
    };

    //button 동작 함수(+버튼 클릭)
    const onButtonClick = () => {
      postQuestion(question);
      console.log(question);
      setQuestion({output: ""});
      setText("");
    };

  return (
    <div>
      <TextField 
        className="todayOutput"
        name="output"
        value={question.output}
        onChange={handleChange}
        inputProps={{ maxLength: 50 }}
        style={{ 
            width: '315px',
          }}
        placeholder="오늘의 질문에 답변해보세요."
        variant="outlined"
        multiline // TextField를 멀티라인으로 변경
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <KeyboardArrowRightOutlinedIcon onClick={onButtonClick} className="uploadIcon" />
            </InputAdornment>
          ), 
        }}
      />

    <div className="date"> 
        <div>{today}</div>
        <div>{text.length}/50</div>
    </div>

    </div>
  );
}

export default AddQuestion;