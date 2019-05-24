import React, { useState } from "react";
import "./AppHeader.css";

function AppHeader() {
  const [goal, setGoal] = useState("Set a Goal");

  return (
    <div className="header">
      <h2>{goal}</h2>
      <form>
        <input />
      </form>
      <button onClick={() => setGoal("Lose Weight")}>Click to Start</button>
    </div>
  );
}

export default AppHeader;
