import React, { useState } from "react";
import "./AppHeader.css";

function AppHeader() {
  const [goal, setGoal] = useState(null);

  return (
    <div className="header">
      <h2 className="animated infinite bounce delay-2s">{goal}</h2>
      <form>
        <input value={goal} onInput={e => setGoal(e.target.value)} />
      </form>
      <button>Get Started</button>
      <button onClick={() => setGoal(null)}>Clear Goal</button>
    </div>
  );
}

export default AppHeader;
