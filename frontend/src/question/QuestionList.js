import React, { useEffect, useState } from "react";
import "./css/QuestionList.css";
import Select from 'react-select';
import SearchIcon from '@mui/icons-material/Search';
import { Divider, List, TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import AddQuestion from "./AddQuestion";
import { call } from "../api/ApiService";
import Question from "./Question";

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
    fontSize: '1em',
    fontWeight: 'bold',
  }),
  control: (provided) => ({ // 보이는 부분 (default=최신순)
    ...provided,
    borderRadius: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '12px',
  }),
};

const QuestionList = () => {
  const [items, setItems] = useState([]);
  const [sortOrder, setSortOrder] = useState(options[1]); // 기본값을 최신순으로 설정

  const handleSortChange = (selectedOption) => {
    setSortOrder(selectedOption);
  }; //오래된순 <-> 최신순 변경

  useEffect(() => { 
    // 백엔드와 프론트엔드 연결
    call("/api/question","GET",null)
    .then((response) => {
      if (response) {
        setItems(response.data);
        console.log(response.data);
      }
    })
    .catch((error) => {
      console.error("Error fetching items", error);
    });
  },[]);

  //추가 
  const postQuestion = (item) => {
    call("/api/question", "POST", item)
    .then((response) => {
      setItems(response.data)
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  //리스트 불러오기 (최신, 오래된 순)
  let questionList = items.length > 0 && (
      <List>
        {items.map((item, index) => (
          <React.Fragment key={item.questionId}>
          <Question item={item}
          />
          {index < items.length - 1 && <Divider />}
          </React.Fragment> // 구분선 추가
        ))}
      </List>
  );
  

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
        f<h5>{questionList}</h5>e
      </div>

    </div>
  );
}

export default QuestionList;