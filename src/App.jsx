import { use, useState } from "react"
import { useEffect } from "react";


function App() {
  const [time, setTime] = useState(new Date());
  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
  useEffect(() => {
    const timerId = setInterval(() => {setTime(new Date())}, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <h1>Current Time</h1>
      <p>{formattedTime}</p>
      <p>Time is updated every second.</p>
      <p>Note: The time is displayed in 12-hour format.</p>
      <p>To see the time update, keep this page open.</p>
      <p>Enjoy the real-time clock!</p>
    </div>
  )
}

export default App
