import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Splash from "./feat_login/Splash";
import App from "./App";
import "./Preview.css";

function Preview() {
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <Routes>
          {/* 스플래시 */}
          <Route path="/" element={<Navigate to="/splash" />} />
          <Route path="/splash" element={<Splash />} />

          {/* App 컴포넌트의 라우트 추가 */}
          <Route path="/app" element={<App />} />
        </Routes>
      </div>
    </div>
  );
}

export default Preview;
