import React from "react";
import "./MemberSelector.css";
import { useDispatch, useSelector } from "react-redux";
import { getScheduleMembersId } from "../../selectors/schedule";
import { getCurrentMember } from "../../selectors/members";
import { replaceCurrentMember } from "../../actions/members";

const MemberSelector = () => {
  const dispatch = useDispatch();
  const members = getScheduleMembersId();
  const currentMember = useSelector(state => state.schedule.currentMember);

  return (
    <div className="MemberSelector">
      {members.map(member => (
        <button
          onClick={({ target: { value } }) =>
            dispatch(replaceCurrentMember(value))
          }
          value={member}
        >
          {member}
        </button>
      ))}
      <div>{currentMember}</div>
    </div>
  );
};

export default MemberSelector;
