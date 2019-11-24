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
    <div className="Schedule" data-testid="schedule">
      {currentMember ? (
        <div>
          <h2 data-testid="member"> {currentMember}, Esta semana te toca: </h2>
          <h1 data-testid="task">{membersTasks[getCurrentWeek]}</h1>
        </div>
      ) : (
        Object.entries(membersTasks).map(([member, memberTask]) => (
          <div
            style={{ display: "flex", justifyContent: "space-around" }}
            key={member}
          >
            <h2 data-testid="member">{member}</h2>
            {memberTask.map(task => (
              <h1 data-testid="task" key={task}>
                {task}
              </h1>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Schedule;
