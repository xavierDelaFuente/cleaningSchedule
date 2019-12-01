/** @jsx jsx */
import { jsx } from "@emotion/core";
import uuid from 'react-uuid'
import { getCurrentWeek } from "../data/constants";

import { useSelector } from "react-redux";
import { getMemberSchedule, getCurrentSchedule } from "../selectors/schedule";

const Schedule = () => {
  const currentMember = useSelector(state => state.schedule.currentMember);
  const membersTasks = currentMember
    ? getMemberSchedule(currentMember)
    : getCurrentSchedule();

  const MemberTasks = ({ memberTask }) =>
    memberTask.map((task, iteration) => (
      <h1
        data-testid="task"
        key={uuid()}
        css={{
          borderTop: "2px solid black",
          borderBottom: "2px solid black",
          borderLeft: "none",
          borderRight: "none",
          color: iteration === getCurrentWeek ? "black" : "lightgrey"
        }}
      >
        {task}
      </h1>
    ));

  const Member = ({ member, memberTask }) => (
    <div
      css={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        width: "25%"
      }}
      key={uuid()}
    >
      <h2 data-testid="member">{member}</h2>
      <MemberTasks memberTask={memberTask} />
    </div>
  );

  const CurrentMember = ({ member, task }) => (
    <div>
      <h2 data-testid="member"> {member}, Esta semana te toca: </h2>
      <h1 data-testid="task">{task}</h1>
    </div>
  );

  return (
    <div
      className="Schedule"
      data-testid="schedule"
      css={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row"
      }}
    >
      {currentMember ? (
        <CurrentMember
          member={currentMember}
          task={membersTasks[getCurrentWeek]}
        />
      ) : (
        Object.entries(membersTasks).map(([member, memberTask]) => (
          <Member memberTask={memberTask} member={member} key={uuid()} />
        ))
      )}
    </div>
  );
};

export default Schedule;
