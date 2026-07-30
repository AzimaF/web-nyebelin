import { useState } from 'react';
import './App.css';

function App() {
  const [stage, setStage] = useState(0);
  const [noTranslate, setNoTranslate] = useState({ x: 0, y: 0 });

  const handleStart = () => {
    setStage(1);
  };

  const handleYes = () => {
    setStage(2);
  };

  const moveNoButton = (e) => {
    const buttonWidth = e.target.offsetWidth || 120;
    const buttonHeight = e.target.offsetHeight || 60;
    const rect = e.target.getBoundingClientRect();
    const origX = rect.left - noTranslate.x;
    const origY = rect.top - noTranslate.y;
    const safeMargin = 20;
    const maxX = window.innerWidth - buttonWidth - safeMargin;
    const maxY = window.innerHeight - buttonHeight - safeMargin;
    const minX = safeMargin;
    const minY = safeMargin;
    const randomAbsX = Math.floor(Math.random() * (maxX - minX) + minX);
    const randomAbsY = Math.floor(Math.random() * (maxY - minY) + minY);
    setNoTranslate({
      x: randomAbsX - origX,
      y: randomAbsY - origY
    });
  };

  return (
    <div className="page-wrapper">
      <main className="hero-section">
        <div className="hero-content">
          {stage === 0 && (
            <div className="stage-0">
              <h1 className="hero-title">
                ADA SESUATU
                <br />
                SPESIAL BUAT <span className="pill">KAMU</span>
              </h1>
              <p className="hero-subtitle">
                Selamat datang di halaman spesial ini. Ada sebuah rahasia kecil yang sudah lama ingin aku sampaikan. Klik tombol di bawah untuk membukanya.
              </p>
              <div className="action-wrapper">
                <button className="action-btn" onClick={handleStart}>
                  BUKA UNDANGAN ✦
                </button>
              </div>
            </div>
          )}

          {stage === 1 && (
            <div className="stage-1">
              <h1 className="hero-title">
                MAUKAH KAMU
                <br />
                MENJADI <span className="pill">PACARKU?</span>
              </h1>
              <p className="hero-subtitle">
                Udah lama banget aku pengen nanyain hal ini ke kamu. Tolong dijawab dari hati ya!
              </p>
              <div className="action-wrapper">
                <div className="action-group">
                  <button className="action-btn" onClick={handleYes}>
                    IYA TENTU SAJA!
                  </button>
                  <button
                    className="action-btn btn-no"
                    onMouseEnter={moveNoButton}
                    onClick={moveNoButton}
                    style={{ transform: `translate(${noTranslate.x}px, ${noTranslate.y}px)` }}
                  >
                    TIDAK
                  </button>
                </div>
              </div>
            </div>
          )}

          {stage === 2 && (
            <div className="stage-2">
              <h1 className="hero-title">
                YEAY!
                <br />
                KITA RESMI <span className="pill">JADIAN! 🎉</span>
              </h1>
              <p className="hero-subtitle">
                Makasih banget udah bilang IYA! Kamu bikin aku jadi orang paling bahagia sekarang.
              </p>
              
              <div className="cards-container">
                <div className="card">
                  <h3>BANYAK JAJAN</h3>
                  <p>Siap-siap aku ajak kulineran dan jajan terus tiap jalan. Gak boleh nolak ya!</p>
                </div>
                <div className="card">
                  <h3>TEMAN NGOBROL</h3>
                  <p>Bakal dengerin semua cerita random kamu, dari yang penting sampai yang absurd sekalipun.</p>
                </div>
                <div className="card bg-green">
                  <h3>SELALU ADA</h3>
                  <p>Janji bakal selalu usahain yang terbaik buat kamu. You're my priority now!</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <div className="marquee-container">
        <div className="marquee-content">
          {stage === 0 && "SANGAT RAHASIA | PRIVASI | JANGAN DIBUKA | KHUSUS UNTUKMU | SANGAT RAHASIA | PRIVASI | JANGAN DIBUKA | KHUSUS UNTUKMU | SANGAT RAHASIA | PRIVASI | JANGAN DIBUKA | KHUSUS UNTUKMU | SANGAT RAHASIA | PRIVASI | JANGAN DIBUKA | KHUSUS UNTUKMU | "}
          {stage === 1 && "BILANG IYA | TERIMA DONG | BILANG IYA | TERIMA DONG | BILANG IYA | TERIMA DONG | BILANG IYA | TERIMA DONG | BILANG IYA | TERIMA DONG | BILANG IYA | TERIMA DONG | BILANG IYA | TERIMA DONG | BILANG IYA | TERIMA DONG | "}
          {stage === 2 && "RESMI PACARAN | AKU SAYANG KAMU | RESMI PACARAN | AKU SAYANG KAMU | RESMI PACARAN | AKU SAYANG KAMU | RESMI PACARAN | AKU SAYANG KAMU | RESMI PACARAN | AKU SAYANG KAMU | RESMI PACARAN | AKU SAYANG KAMU | "}
        </div>
      </div>
    </div>
  );
}

export default App;
