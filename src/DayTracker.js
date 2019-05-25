import React, { useState } from "react";
import "./DayTracker.css";

function DayTracker() {
  const [days, setDays] = useState(1);
  const [hours, setHours] = useState(24);

  return (
    <div class="day-box">
      <div className="day-counter">
        <h3>Days You've Been at it:</h3>
        <h4>{days}</h4>

        <h4>Hours:</h4>
        <p> {hours}</p>

        <button onClick={() => setDays(days + 1)}>+</button>
      </div>
    </div>
  );
}
export default DayTracker;
