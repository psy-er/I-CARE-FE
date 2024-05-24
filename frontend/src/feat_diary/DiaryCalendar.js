import React, { useState, useEffect, useCallback } from "react";
import './css/DiaryCalendar.css';
import { addDays, endOfMonth, startOfWeek, endOfWeek, isSameDay } from 'date-fns';
import { call } from '../api/ApiService';
import DiaryDay from "./DiaryDay";
import DiaryDetail from "./DiaryDetail";

const DiaryCalendar = () => {
  const [diaryList, setDiaryList] = useState([]);
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [days, setDays] = useState([]);
  const [current, setCurrent] = useState();
  const [selectedDiary, setSelectedDiary] = useState();

  useEffect(() => {
    const today = new Date();
    setYear(today.getFullYear());
    setMonth(today.getMonth() + 1);
    setCurrent(today);
  }, []);

  const showCalendar = useCallback(() => {
    const monthStart = new Date(year, month-1, 1);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    let presentDate = startDate;
    const nowDays = [];
    while (presentDate <= endDate) {
      nowDays.push(presentDate);
      presentDate = addDays(presentDate, 1);
    }
    setDays(nowDays);
    setCurrent(monthStart);
  }, [month, year]);

  useEffect(() => {
    if(year && month){
      const childId = "temporary-childId";
      call(`/api/diary/list?childId=${childId}&year=${year}&month=${month}`, "GET", null)
        .then((response) => {
          if(response) {
            setDiaryList(response);
          }
        });
      showCalendar();
    }
  }, [month, year, showCalendar]);

  const onLeftClick = () => {
    if(month === 1) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  }

  const onRightClick = () => {
    if(month === 12) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  }

  const onSelected = (diary, icon) => {
    if(diary && icon) {
      setSelectedDiary({
        diary: diary,
        icon: icon
      });
    } else {
      setSelectedDiary({
        diary: null,
        icon: null
      });
    }
  }

  const renderWeeks = () => {
    const weeks = [];
    for(let i = 0; i < days.length; i += 7) {
      const week = days.slice(i, i + 7);
      weeks.push(
        <div key={i} className="week" style={{display: 'flex', justifyContent: 'center'}}>
          {week.map((day, index) => {
            const diary = diaryList.find(diary => isSameDay(new Date(diary.date), day));
            return <DiaryDay key={index} year={year} month={month} day={day}
                      diary={diary} current={current} onSelected={onSelected} />;
          })}
        </div>
      )
    }
    return weeks;
  };

  return (
    <div>
      <div className="calendar">
        <div className="month">
          <button onClick={onLeftClick}>{'<'}</button>
          <p>{year}년 {month}월</p>
          <button onClick={onRightClick}>{'>'}</button>
        </div>
        <div className="week">
          {['일', '월', '화', '수', '목', '금', '토'].map(day => (
            <div key={day} className="day">{day}</div>
          ))}
        </div>
        <div className="days">
          {renderWeeks()}
        </div>
      </div>
      {selectedDiary && <DiaryDetail selectedDiary={selectedDiary} />}
    </div>
  );
}

export default DiaryCalendar;