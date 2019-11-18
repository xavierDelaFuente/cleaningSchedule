import React from "react";
import "./Schedule.css";
import { initialDate } from "../../data/constants";

import { useDispatch, useSelector } from "react-redux";
import { getMemberSchedule } from "../../selectors/schedule";
// import { getCurrentMember } from "../../selectors/members";
// import { replaceCurrentMember } from "../../actions/members";

const Schedule = ({ subject }) => {
  const currentMember = useSelector(state => state.schedule.currentMember);
  const membersTasks = getMemberSchedule(currentMember);
  return (
    <div className="Schedule">
      <div>{initialDate}</div>
      {membersTasks && membersTasks.map(task => <h3>{task}</h3>)}
    </div>
  );
};

export default Schedule;
