import React, { useEffect, useState } from "react";
import { getProfileList } from "./api/api-profile";
import './css/ProfileList.css';
import Profile from "./Profile";
import AddProfile from "./AddProfile";

const ProfileList = () => {
  const [profileList, setProfileList] = useState([]);
  const [sort, setSort] = useState("latest");

  useEffect(() => {
    getProfileList()
      .then(profileList => {
        if(profileList) {
          const sortedList = sortProfiles(profileList, sort);
          setProfileList(sortedList);
        }
      });
  });

  useEffect(() => {
    const sortedList = sortProfiles(profileList, sort);
    setProfileList(sortedList);
  }, [profileList, sort]);

  const onUpdate = (response) => {
    const updatedProfileList = [...profileList, response];
    const sortedList = sortProfiles(updatedProfileList, sort);
    setProfileList(sortedList);
  }

  const sortProfiles = (profileList, sort) => {
    return profileList.sort((a, b) => {
      if(sort === "latest") {
        return new Date(b.date) - new Date(a.date);
      } else if(sort === "old") {
        return new Date(a.date) - new Date(b.date);
      }
      return [];
    })
  }

  const handleSort = (e) => {
    const sort = e.target.value;
    setSort(sort);
  }

  return (
    <div className="profileList">
      <div className="sort">
        <select onChange={handleSort} value={sort}>
          <option value="latest">최신순</option>
          <option value="old">오래된 순</option>
        </select>
      </div>
      <div className="profiles">
        {profileList.map((profile) => (
          <Profile key={profile.profileId} profile={profile} />
        ))}
      </div>
      <div className="add">
        <AddProfile onUpdate={onUpdate} />
      </div>
    </div>
  );
}

export default ProfileList;