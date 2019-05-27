import React from "react";
import AppHeader from "./AppHeader";
import DayTracker from "./DayTracker";
import TodayDate from "./TodayDate";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <TodayDate />
      <DayTracker />
    </div>
  );
}

export default App;
