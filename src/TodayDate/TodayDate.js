import React, { Component } from "react";
import "./TodayDate.css";

class TodayDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toDateString()
    };
  }

  render() {
    return (
      <div className="date-container">
        <h1>{this.state.date}</h1>
      </div>
    );
  }
}

export default TodayDate;
