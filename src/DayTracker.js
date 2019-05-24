import React, { useState } from "react";

function DayTracker() {
  const [days, setDays] = useState("1");
  return (
    <div class="day-box">
      <div className="day-counter">
        <h3>Days You've Been at it:</h3>
        <h4>{days}</h4>
      </div>
    </div>
  );
}
export default DayTracker;
