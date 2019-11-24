import React from "react";
import "./MemberSelector.css";
import { useDispatch } from "react-redux";
import { getScheduleMembersId } from "../../selectors/schedule";
import { replaceCurrentMember } from "../../actions/members";

const MemberSelector = () => {
  const dispatch = useDispatch();
  const members = getScheduleMembersId();

  return (
    <div className="MemberSelector">
      <button onClick={() => dispatch(replaceCurrentMember(null))}>
        Full schedule
      </button>
      {members && (
        <div>
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
        </div>
      )}
    </div>
  );
};

export default MemberSelector;
