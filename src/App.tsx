import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="app">
      <div className={`invitation-container ${isVisible ? 'visible' : ''}`}>
        {/* 장식 요소 */}
        <div className="decoration-top"></div>
        <div className="decoration-bottom"></div>

        {/* 메인 컨텐츠 */}
        <div className="content">
          <div className="header">
            <div className="ornament"></div>
            <h1 className="title">환갑연</h1>
            <div className="ornament"></div>
          </div>

          <div className="main-text">
            <p className="greeting">
              소중한 분들을 모시고<br />
              뜻깊은 자리를 마련하였습니다
            </p>

            <div className="name-section">
              <div className="name-highlight">
                <h2 className="celebrant-name">김은영</h2>
                <p className="celebrant-title">여사님 환갑잔치</p>
              </div>
            </div>

            <div className="details">
              <div className="detail-item">
                <span className="icon">📅</span>
                <div className="detail-text">
                  <p className="detail-label">일시</p>
                  <p className="detail-value">2025년 11월 22일 (토요일)</p>
                  <p className="detail-value">오후 3시 30분</p>
                </div>
              </div>

              <div className="detail-item">
                <span className="icon">📍</span>
                <div className="detail-text">
                  <p className="detail-label">장소</p>
                  <p className="detail-value">마이어스 수원점</p>
                  <p className="detail-address">경기 수원시 권선구 경수대로 270</p>
                  <p className="detail-address">터미널동 3층~4층</p>
                </div>
              </div>
            </div>

            <div className="invitation-message">
              <p>
                귀한 걸음 해주시어<br />
                자리를 빛내주시면<br />
                큰 기쁨이겠습니다
              </p>
            </div>

            <div className="map-button-container">
              <a
                href="https://map.naver.com/p/search/%EA%B2%BD%EA%B8%B0%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EA%B6%8C%EC%84%A0%EA%B5%AC%20%EA%B2%BD%EC%88%98%EB%8C%80%EB%A1%9C%20270"
                target="_blank"
                rel="noopener noreferrer"
                className="map-button"
              >
                <span className="map-icon">🗺️</span>
                지도 보기
              </a>
            </div>
          </div>

          <div className="footer">
            <div className="footer-ornament"></div>
            <p className="footer-text">감사합니다</p>
            <div className="footer-ornament"></div>
          </div>
        </div>

        {/* 떨어지는 꽃잎 효과 */}
        <div className="petals">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="petal"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
