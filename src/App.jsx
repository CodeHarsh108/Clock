import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());
  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="clock-container">
      <div className="clock-card">
        <div className="clock-header">
          <div className="clock-icon">
            <div className="clock-face">
              <div className="clock-hand hour-hand"></div>
              <div className="clock-hand minute-hand"></div>
              <div className="clock-center"></div>
            </div>
          </div>
          <h1 className="clock-title">Current Time</h1>
        </div>
        
        <div className="time-display">
          <div className="time-main">{formattedTime}</div>
          <div className="date-display">{formatDate(time)}</div>
        </div>
        
        <div className="clock-info">
          <div className="info-item">
            <div className="info-icon">⏰</div>
            <p>Time updates every second</p>
          </div>
          <div className="info-item">
            <div className="info-icon">🕐</div>
            <p>Displayed in 12-hour format</p>
          </div>
          <div className="info-item">
            <div className="info-icon">📱</div>
            <p>Keep this page open to see live updates</p>
          </div>
        </div>
        
        <div className="clock-footer">
          <p>Enjoy your real-time clock experience!</p>
        </div>
      </div>
    </div>
  );
}

export default App;