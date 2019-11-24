import React from "react";
import "./Schedule.css";
import { getCurrentWeek } from "../../data/constants";

import { useSelector } from "react-redux";
import { getMemberSchedule, getSchedule } from "../../selectors/schedule";

const Schedule = () => {
  const currentMember = useSelector(state => state.schedule.currentMember);
  const membersTasks = currentMember
    ? getMemberSchedule(currentMember)
    : getSchedule();
  return (
    <div className="Schedule">
      {currentMember ? (
        <div>
          <h2> {currentMember}, Esta semana te toca: </h2>
          <h1>{membersTasks[getCurrentWeek]}</h1>
        </div>
      ) : (
        Object.entries(membersTasks).map(([member, memberTask]) => (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <h3>{member}</h3>
            {memberTask.map(task => (
              <h3>{task}</h3>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Schedule;
