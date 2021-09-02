import React from "react";
import "./styles.css";

const OpeningHours = () => {
  return (
    <div className="opening_container">
      <div>
        <div>
          <h1 className="opening_hours_title">OPENING HOURS</h1>
        </div>
        <div className="opening_hours_container">
          <div className="opening_hours">
            <span className="span">Weekdays</span> 9:00 AM - 8:00 PM
          </div>
          <div className="opening_hours">
            <span className="span">Saturday</span> 9:00 AM - 6:00 PM
          </div>
          <div className="opening_hours">
            <span className="span">Sunday</span> 11:00 AM - 2:00 PM
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;
