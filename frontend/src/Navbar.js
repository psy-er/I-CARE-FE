import React from "react";
import "./Navbar.css";
import { Link, useLocation, matchPath } from "react-router-dom";

const Navbar = () => {
  // 현재 주소
  const location = useLocation();

  const isFirstLink = matchPath({path: '/first/*'}, location.pathname);
  const isSecondLink = matchPath({path: '/second/*'}, location.pathname);
  const isDiaryLink = matchPath({path: '/diary/*'}, location.pathname);
  const isFourthLink = matchPath({path: '/fourth/*'}, location.pathname);
  const isFifthLink = matchPath({path: '/fifth/*'}, location.pathname);
  return (
    <nav className="navbar">
      
      {/* 00봇 아이콘 */}
      <Link to="/first" className="nav-link" style={{ textDecoration: 'none' }}>
        <div>
          {isFirstLink ? (
          <img src="/bot.png" alt="챗봇" /> //선택 했을 때
          ) : (
          <img src="/bot_un.png" alt="챗봇" /> // 선택 안 했을 때
          )}
          <div className={isFirstLink ? 'active' : 'inactive'}>00봇</div>
        </div>
      </Link>

      {/* 실시간 영상 */}
      <Link to="/second" className="nav-link" style={{ textDecoration: 'none' }}>
        <div>
          {isSecondLink ? (
          <img src="/bot.png" alt="실시간 영상" /> //선택 했을 때
          ) : (
          <img src="/bot_un.png" alt="실시간 영상" /> // 선택 안 했을 때
          )}
          <div className={isSecondLink ? 'active' : 'inactive'}>실시간 영상</div>
        </div>
      </Link>

      {/* 일기 작성 */}
      <Link to="/diary" className="nav-link" style={{ textDecoration: 'none' }}>
        <div> 
          {isDiaryLink ? (
          <img src="/diary.png" alt="공감일기" /> //선택 했을 때
          ) : (
          <img src="/diary_un.png" alt="공감일기" /> // 선택 안 했을 때
          )}
          <div className={isDiaryLink ? 'active' : 'inactive'}>공감일기</div>
        </div>
      </Link>

      {/* 워드 클라우드 */}
      <Link to="/fourth" className="nav-link" style={{ textDecoration: 'none' }}>
        <div>
          {isFourthLink ? (
          <img src="/word_cloud.png" alt="공감일기" /> //선택 했을 때
          ) : (
          <img src="/word_cloud_un.png" alt="공감일기" /> // 선택 안 했을 때
          )}
          <div className={isFourthLink ? 'active' : 'inactive'}>워드클라우드</div>
        </div>
      </Link>

      {/* 1일 1문답 */}
      <Link to="/fifth" className="nav-link" style={{ textDecoration: 'none' }}>
        <div>
          {isFifthLink ? (
          <img src="/question.png" alt="일일문답" /> //선택 했을 때
          ) : (
          <img src="/question_un.png" alt="일일문답" /> // 선택 안 했을 때
          )}
          <div className={isFifthLink ? 'active' : 'inactive'}>일일문답</div>
        </div>
      </Link>

    </nav>
  );
};

export default Navbar;