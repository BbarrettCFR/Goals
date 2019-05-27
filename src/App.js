import React from "react";
import AppHeader from "./AppHeader/AppHeader";
import DayTracker from "./DayTracker/DayTracker";
import TodayDate from "./TodayDate/TodayDate";
import List from "./List/List";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <TodayDate />
      <DayTracker />
      <List />
    </div>
  );
}

export default App;
