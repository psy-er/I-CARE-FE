import React, {useEffect, useState} from "react";
import './css/DiaryDetail.css';

const DiaryDetail = (props) => {
  const [diary, setDiary] = useState(props.selectedDiary.diary);
  const [icon, setIcon] = useState(props.selectedDiary.icon);
  const [date, setDate] = useState(new Date(diary.date));
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const weekday = weekdays[date.getDay()];

  useEffect(() => {
    setDiary(props.selectedDiary.diary);
    setIcon(props.selectedDiary.icon);
  }, [props.selectedDiary]);

  useEffect(() => {
    setDate(new Date(diary.date));
  }, [diary]);

  useEffect(() => {}, [date]);

  return (
    <div className="detail">
      <div className="title">
        <div className="date">
          {date.getFullYear()}년 {date.getMonth()}월 {date.getDay()}일 ({weekday})
        </div>
        <div className="iconDetail">{icon}</div>
      </div>
      <div className="content">
        {diary.content}
      </div>
    </div>
  );
}

export default DiaryDetail;