import React, { useEffect, useState } from "react";
import "./css/QuestionHome.css";
import Select from 'react-select';
import SearchIcon from '@mui/icons-material/Search';
import { Divider, List, TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import AddQuestion from "./AddQuestion";
import { call } from "../api/ApiService";
import QuestionList from "./QuestionList";

const options = [
  { value: '오래된순', label: '오래된순' },
  { value: '최신순', label: '최신순' }
];

const customStyles = {
  option: (provided, state) => ({ // 오래된순, 최신순
    ...provided,
    backgroundColor: state.isFocused ? '#6271f5' : null,
    color: state.isFocused ? '#fff' : '#000',
    paddingLeft: 10,
    borderRadius: '2px',
    textAlign: 'center',
    fontSize: '12px',
  }),
  control: (provided) => ({ // 보이는 부분 (default=최신순)
    ...provided,
    borderRadius: '10px',
    textAlign: 'center',
    fontSize: '13px',
  }),
};

const QuestionHome = () => {
  const [items, setItems] = useState([]);
  const [sortOrder, setSortOrder] = useState(options[1]); // 기본값을 최신순으로 설정

  const handleSortChange = (selectedOption) => {
    setSortOrder(selectedOption);
  }; //오래된순 <-> 최신순 변경

  useEffect(() => { 
    const childId = "temporary-childId";
    call(`/api/question?childId=${childId}`,"GET",null)
    .then((response) => {
      if (response) {
        setItems(response);
        console.log(response);
      }
    })
    .catch((error) => {
      console.error("Error fetching items", error);
    });
  },[]);

  //추가 
  const postQuestion = (item) => {
    const childId = "temporary-childId";
    call(`/api/question?childId=${childId}`, "POST", item)
    .then((response) => {
      if(response) {
        setItems([...items, response])
      }
    }) 
    .catch((error) => {
      console.error(error);
    });
  };

  //리스트 불러오기 (최신 순)
  let questionNewList = items.length > 0 && (
      <List>
        {items.map((item, index) => (
          <React.Fragment key={item.questionId}>
          <QuestionList item={item}
          />
          {index < items.length - 1 && <Divider />}
          </React.Fragment> // 구분선 추가
        ))}
      </List>
  );

    //리스트 불러오기 (오래된 순)
  let questionOldList = items.length > 0 && (
      <List>
        {items.reverse().map((item, index) => (
          <React.Fragment key={item.questionId}>
          <QuestionList item={item}
          />
          {index < items.length - 1 && <Divider />}
          </React.Fragment> // 구분선 추가
        ))}
      </List>
  );

  const questionList = sortOrder === options[1] ? questionNewList : questionOldList;
  

  //검색 - 엔터 & 돋보기


  
  return (
    <div>
      <div className="todayInput">어떤 놀이가 제일 좋아?</div>
      
      <AddQuestion postQuestion={postQuestion}/> {/* 추가부분 */}
      
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
        <h5 className="questionList">
          {questionList}  
        </h5>
      </div>

    </div>
  );
}

export default QuestionHome;