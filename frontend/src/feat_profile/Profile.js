import React, { useEffect, useState } from "react";
import { getProfileImage } from "./api/api-profile";
import { useNavigate } from "react-router-dom";

const Profile = (props) => {
  const navigate = useNavigate();
  const profile = props.profile;
  const date = new Date(profile.date);
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const weekday = weekdays[date.getDay()];
  const [image, setImage] = useState();

  useEffect(() => {
    getProfileImage(profile.profileId)
      .then(response => {
        if(response) {
          setImage(response);
        }
      })
      .catch(error => {
        console.error('Error fetching image URL: ', error);
      });
  });

  const onMoveDetail = () => {
    navigate('/profile/detail', {state: {date, weekday, image}});
  }

  return (
    <div className="profile" onClick={onMoveDetail}>
      <div className="date">
        {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일({weekday})
      </div>
      <div className="wordCloud">
        <img src={image} alt="wordCloud" />
      </div>
    </div>
  );
}

export default Profile;