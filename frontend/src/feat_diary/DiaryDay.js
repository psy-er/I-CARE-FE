import React, { useState, useEffect } from "react";
import './css/DiaryCalendar.css';
import { format, isSameMonth, isSameDay } from "date-fns";
import { call } from '../api/ApiService';
import MAddDiary from "./MAddDiary";

const DiaryDay = (props) => {
  const [icon, setIcon] = useState();
  const [diary, setDiary] = useState(props.diary);
  const year = props.year;
  const month = props.month;
  const day = props.day;
  const date = year + '년 ' + month + '월 ' + day.getDate() + '일';
  
  const current = props.current;
  const onSelected = props.onSelected;
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const today = new Date();
  const isToday = isSameDay(day, today);
  const isDisabled = !isSameMonth(day, current);

  useEffect(() => {
    setDiary(props.diary);
  }, [props.diary]);

  useEffect(() => {
    if(diary){
      call(`/api/diary/icon?iconId=${diary.iconId}`, "GET", null)
        .then((response) => {
          if(response) {
            setIcon(response.font);
          }
        });
    } else {
      setIcon('');
    }
  }, [diary]);

  const handleSelected = () => {
    onSelected(diary, icon);
  }

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  }

  const handleConfirm = () => {
    handleClosePopup();
    window.location.href = '/diary/add';
  }

  return (
    <div>
      {icon ? (
        <button className={`day ${isDisabled ? 'disabled' : ''} ${isToday ? 'today' : ''}`}
          onClick={handleSelected}>
          {format(day, 'd')}
        </button>
      ) : (
        <button className={`day ${isDisabled ? 'disabled' : ''} ${isToday ? 'today' : ''}`}
          onClick={handleOpenPopup}>
          {format(day, 'd')}
        </button>
      )}
      <div className="icon">{icon}</div>
      <MAddDiary date={date} isOpen={isPopupOpen} 
        onClose={handleClosePopup} onConfirm={handleConfirm} />
    </div>
  );
}

export default DiaryDay;