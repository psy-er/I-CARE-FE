import React, { useEffect, useState } from "react";
import "./css/QuestionHome.css";
import Select from 'react-select';
import { Divider, List } from "@mui/material";
import AddQuestion from "./AddQuestion";
import { call } from "../api/ApiService";
import QuestionList from "./QuestionList";
import SearchQuestion from "./SearchQuestion";
import Header from "../Header";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { useNavigate } from "react-router-dom";

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
  
  //검색
  const searchQuestion = (item) => {
    const childId = "temporary-childId";
    call(`/api/question/search?childId=${childId}&output=${item.output}`, "GET", null)
    .then((response) => {
        if (response) {
          console.log(item.output);
          setItems(response);
        } else {
            console.log(item.output);
            console.error("Empty response received");
        }
    })
    .catch((error)=>{
        console.error("Failed to retrieve items:", error);
    });
}

    const navigate = useNavigate();

    // const goBack = () => { // 뒤로가기
    //     navigate(-1);
    // };

  return (
    <div>

      {/* 설정 | title | 프로필 */}
      <Header
        title={"일일문답1"}
        leftChild = {
          <SettingsOutlinedIcon 
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/')}/>} //setting으로 이동 - 추후에 링크 수정
        rightChild={
          <PermIdentityOutlinedIcon
             sx={{ cursor: 'pointer' }}
             onClick={() => navigate('/')}/>} //profile으로 이동 - 추후에 링크 수정
      />

      
      {/* 뒤로가기 | title | none
      <Header
        title={"일일문답2"}
        leftChild={<ArrowBackIosOutlinedIcon 
          onClick={goBack} //뒤로 이동
          sx={{ cursor: 'pointer' }}/>
          }
      /> */}

      <div className="todayInput">어떤 놀이가 제일 좋아?</div>
      
      <AddQuestion postQuestion={postQuestion}/> {/* 추가부분 */}

      <div className="search"> 
        <Select
          value={sortOrder}
          onChange={handleSortChange}
          options={options}
          styles={customStyles}
          className="selectBox"
        />

        <SearchQuestion searchQuestion={searchQuestion}/> {/* 검색부분 */}

      </div>
      
      <div className="questionList">
          {questionList}  
      </div>

    </div>
  );
}

export default QuestionHome;