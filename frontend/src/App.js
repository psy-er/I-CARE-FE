import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import DiaryDetail from "./feat_diary/DiaryDetail";
import DiaryCalendar from "./feat_diary/DiaryCalendar";
import AddDiary from "./feat_diary/AddDiary";
import QuestionHome from "./feat_question/QuestionHome";
import ProfileList from "./feat_profile/ProfileList";
import ProfileDetail from "./feat_profile/ProfileDetail";
import Login from "./feat_login/Login";
import SignUp from "./feat_login/SignUp";
import Splash from "./feat_login/Splash";
import ChatbotFeedbackHome from './feat_chatbot_feedback/ChatbotFeedbackHome';

function App() {
  return (
    <Routes>
      {/* 일기 */}
      <Route path="/diary" element={<DiaryCalendar />} />
      <Route path="/diary/detail" element={<DiaryDetail />} />
      <Route path="/diary/add" element={<AddDiary />} />

      {/* 프로필(워드클라우드) */}
      <Route path="/profile" element={<ProfileList />} />
      <Route path="/profile/detail" element={<ProfileDetail />} />

      {/* 1일 1질문 */}
      <Route path="/question" element={<QuestionHome />} />

      {/* 챗봇 피드백 */}
      <Route path="/chatbot/feedback" element={<ChatbotFeedbackHome />} />

      {/* 로그인 */}
      <Route path="/login" element={<Login />} />

      {/* 회원가입 */}
      <Route path="/signup" element={<SignUp />} />

      {/* 스플래시 */}
      <Route path="/" element={<Navigate to="/splash" />} />
      <Route path="/splash" element={<Splash />} />

    </Routes>
  );
}

export default App;
