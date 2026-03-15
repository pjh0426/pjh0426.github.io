import React, { useState } from 'react';
import './MainContent.css';

const MainContent = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <main className="main-content">
      <div className="content-container">
        {/* Church Vision Section */}
        <section className="content-section vision-section">
          <h2 className="section-title">교회 비전</h2>
          <div className="vision-content">
            <blockquote className="vision-quote">
              "성경의 진리를 삶으로 살아내어 복음을 전하는 교회"
              <br /><br />
              본문: "푯대를 향하여 그리스도 예수 안에서 
              <br />하나님이 위에서 부르신 부름의 상을 위하여 달려가노라"
            </blockquote>
            <p className="vision-reference">빌립보서 3:14</p>
          </div>
        </section>

        {/* Recent Sermon Section */}
        <section className="content-section sermon-section">
          <h2 className="section-title">최근 설교/유튜브 영상</h2>
          <div className="video-container">
            {!isVideoPlaying ? (
              <div className="video-placeholder" 
                   style={{
                     backgroundImage: `url('https://img.youtube.com/vi/cCeHRH7IDG0/maxresdefault.jpg')`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     cursor: 'pointer'
                   }}
                   onClick={handlePlayClick}>
                <div className="play-icon">▶</div>
              </div>
            ) : (
              <div className="video-iframe-container">
                <iframe
                  width="100%"
                  height="300"
                  src="https://www.youtube.com/embed/cCeHRH7IDG0?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    borderRadius: '12px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                  }}
                ></iframe>
              </div>
            )}
            <a href="https://www.youtube.com/live/cCeHRH7IDG0" className="video-link" target="_blank" rel="noopener noreferrer">최근 설교 영상 보기</a>
          </div>
        </section>

        {/* Bulletin & Events Section */}
        <section className="content-section bulletin-section">
          <h2 className="section-title">주보 & 행사</h2>
          <div className="bulletin-buttons">
            <button className="bulletin-btn">주보 다운로드</button>
            <button className="bulletin-btn">다가오는 행사</button>
          </div>
        </section>

        {/* Prayer Section */}
        {/* <section className="content-section prayer-section">
          <h2 className="section-title">기도 제목 & 나눔</h2>
          <div className="prayer-input-container">
            <label htmlFor="prayer-request" className="prayer-label">기도 오렁</label>
            <input 
              type="text" 
              id="prayer-request" 
              className="prayer-input"
              placeholder="기도저트릴 일다하세오"
            />
          </div>
        </section> */}

        {/* Prayer Board Section */}
        {/* <section className="content-section prayer-board-section">
          <h2 className="section-title">기도 제목 게시판</h2>
          <ul className="prayer-board-list">
            <li>버를 보잉시 음지 에닐 벙추 님당</li>
            <li>진독 스제드진 제외 와응</li>
            <li>도 스즈먼 회설목 지정</li>
          </ul>
        </section> */}
      </div>
    </main>
  );
};

export default MainContent;
