import React, { useState } from "react";
import "./css/QuestionList.css";
import Select from 'react-select';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';

const options = [
  { value: '오래된순', label: '오래된순' },
  { value: '최신순', label: '최신순' }
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#6271f5' : null,
    color: state.isFocused ? '#fff' : '#000',
    paddingLeft: 10,
    borderRadius: '2px',
    textAlign: 'center',
    fontSize: '1em',
    fontWeight: 'bold',
  }),
  control: (provided) => ({
    ...provided,
    borderRadius: '10px', // 드롭다운 컨트롤의 테두리를 둥글게 설정
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '12px',
  }),
};

const QuestionList = () => {
  const date = new Date(); // 날짜 받아오기 
  const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`; // 오늘 날짜
  const [text, setText] = useState(''); // 글자수
  
  const [sortOrder, setSortOrder] = useState(options[1]); // 기본값을 최신순으로 설정

  const handleSortChange = (selectedOption) => {
    setSortOrder(selectedOption);
  };


  //답변할 박스

  //글자수
  const handleChange = (event) => {
    setText(event.target.value);
  };

  //정렬 (최신, 오래된 순)

  //검색 - 엔터 & 돋보기
  

  
  return (
    <div>
      <div className="todayInput">오늘의 질문</div>
      <TextField 
        className="todayOutput"
        value={text}
        onChange={handleChange}
        inputProps={{ maxLength: 50 }}
        fullWidth
        placeholder="오늘의 질문에 답변해보세요."
        variant="outlined"
      />

      <div className="date"> 
        <div>{today}</div>
        <div>{text.length}/50</div>
      </div>
      <div className="line"></div>

      <div className="search"> 
      <Select
        value={sortOrder}
        onChange={handleSortChange}
        options={options}
        styles={customStyles}
        className="selectBox"
      />

      <TextField 
        className="searchBox" 
        type="text" 
        placeholder="문답을 검색해보세요." 
        variant="outlined"
        style={{ 
          width: '180px',
        }}
        size="small"
        InputProps={{
          style: { fontSize: 11, marginTop:'2px', paddingTop:'2px' }, // placeholder와 입력 텍스트의 크기 설정
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className="searchIcon" />
            </InputAdornment>
          ),
        }}
        />
      </div>
      
      <div>
        이전 질문
        <h5>드롭다운 이전 답변</h5>
      </div>

    </div>
  );
}

export default QuestionList;