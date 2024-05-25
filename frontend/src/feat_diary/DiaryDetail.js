import React, { useState, useEffect } from "react";
import './css/DiaryDetail.css';
import { useLocation, useNavigate } from "react-router-dom";
import { getIconFont } from "./api/api-icon";
import MDeleteDiary from "./modal/MDeleteDiary";

const DiaryDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const diary = location.state?.diary;
  const [icon, setIcon] = useState();
  const date = new Date(diary.date);
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const weekday = weekdays[date.getDay()];

  const month = date.getMonth() + 1
  const stringDate = date.getFullYear() + "년 " + month + "월 " + date.getDay() + "일";
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    getIconFont(diary.iconId)
      .then(iconFont => {
        if(iconFont) {
          setIcon(iconFont);
        }
      });
  }, [diary]);

  const onEdit = () => {
    navigate('/diary');
  }

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  }

  return (
    <div className="detail">
      <div className="date">
        {stringDate} {weekday}요일
      </div>
      <div className="sub">
        <div className="icon">{icon}</div>
        <div className="content">{diary.content}</div>
      </div>
      <div>
        <button className="edit" onClick={onEdit}>수정</button>
        <button className="delete" onClick={handleOpenPopup}>삭제</button>
      </div>
      <MDeleteDiary isOpen={isPopupOpen} onClose={handleClosePopup}
        stringDate={stringDate} diary={diary} />
    </div>
  );
}

export default DiaryDetail;