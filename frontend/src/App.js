import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DiaryDetail from "./feat_diary/DiaryDetail";
import DiaryCalendar from "./feat_diary/DiaryCalendar";
import AddDiary from "./feat_diary/AddDiary";
import QuestionList from "./question/QuestionList";
import AddQuestion from "./question/AddQuestion";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
    <Routes>
      
      {/* 일기 */}
      <Route path="/diary" element={<DiaryCalendar />} />
      <Route path="/diary/detail" element={<DiaryDetail />} />
      <Route path="/diary/add" element={<AddDiary />} />

      {/* 1일 1질문 */}
      <Route path="/question/list" element={<QuestionList />} />
      <Route path="/question/add" element={<AddQuestion />} />

    </Routes>
    </div>

  );
}

export default App;
