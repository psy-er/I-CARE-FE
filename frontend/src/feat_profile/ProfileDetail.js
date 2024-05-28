import React from "react";
import { useLocation } from "react-router-dom";
import './css/ProfileDetail.css';

const ProfileDetail = () => {
  const location = useLocation();
  const date = location.state?.date;
  const weekday = location.state?.weekday;
  const image = location.state?.image;

  return (
    <div className="profileDetail">
      <div className="date">
        {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일({weekday})
      </div>
      <div className="wordCloud">
        <img src={image} alt="wordCloud" />
      </div>
    </div>
  );
}

export default ProfileDetail;