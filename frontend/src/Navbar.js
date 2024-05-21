import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import bot from "../public/bot.png"

const Navbar = () => {
  // 현재 선택된 아이콘을 관리하는 state
  const [activeNav, setActiveNav] = useState(1);
  return (
    <nav className="navbar">
      
      {/* 00봇 아이콘 */}
      <Link to="/first" className="nav-link" onClick={() => setActiveNav(1)} style={{ textDecoration: 'none' }}>
        <div>
          {activeNav === 1 ? (
          <img src="/bot.png" alt="챗봇" /> //선택 했을 때
          ) : (
          <img src="/bot_un.png" alt="챗봇" /> // 선택 안 했을 때
          )}
          <div className={activeNav === 1 ? 'active' : 'inactive'}>00봇</div>
        </div>
      </Link>

      {/* 실시간 영상 */}
      <Link to="/second" className="nav-link" onClick={() => setActiveNav(2)} style={{ textDecoration: 'none' }}>
        <div>
          {activeNav === 2 ? (
          <img src="/bot.png" alt="실시간 영상" /> //선택 했을 때
          ) : (
          <img src="/bot_un.png" alt="실시간 영상" /> // 선택 안 했을 때
          )}
          <div className={activeNav === 2 ? 'active' : 'inactive'}>실시간 영상</div>
        </div>
      </Link>

      {/* 일기 작성 */}
      <Link to="/third" className="nav-link" onClick={() => setActiveNav(3)} style={{ textDecoration: 'none' }}>
        <div> 
          {activeNav === 3 ? (
          <img src="/diary.png" alt="공감일기" /> //선택 했을 때
          ) : (
          <img src="/diary_un.png" alt="공감일기" /> // 선택 안 했을 때
          )}
          <div className={activeNav === 3 ? 'active' : 'inactive'}>공감일기</div>
        </div>
      </Link>

      {/* 워드 클라우드 */}
      <Link to="/fourth" className="nav-link" onClick={() => setActiveNav(4)} style={{ textDecoration: 'none' }}>
        <div>
          {activeNav === 4 ? (
          <img src="/word_cloud.png" alt="공감일기" /> //선택 했을 때
          ) : (
          <img src="/word_cloud_un.png" alt="공감일기" /> // 선택 안 했을 때
          )}
          <div className={activeNav === 4 ? 'active' : 'inactive'}>워드클라우드</div>
        </div>
      </Link>

      {/* 1일 1문답 */}
      <Link to="/fifth" className="nav-link" onClick={() => setActiveNav(5)} style={{ textDecoration: 'none' }}>
        <div>
          {activeNav === 5 ? (
          <img src="/question.png" alt="일일문답" /> //선택 했을 때
          ) : (
          <img src="/question_un.png" alt="일일문답" /> // 선택 안 했을 때
          )}
          <div className={activeNav === 5 ? 'active' : 'inactive'}>일일문답</div>
        </div>
      </Link>

    </nav>
  );
};

export default Navbar;