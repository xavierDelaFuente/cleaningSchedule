/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useDispatch } from "react-redux";
import { getScheduleMembersId } from "../selectors/schedule";
import { replaceCurrentMember } from "../actions/members";

const MemberSelector = () => {
  const dispatch = useDispatch();
  const members = getScheduleMembersId();

  const Button = ({ text, onClick, value, ...restProps }) => (
    <button
      css={{
        borderRadius: "12em",
        border: "0.1em solid #2ecc71",
        color: "#2ecc71",
        overflow: "hidden",
        background: "white",
        fontSize: "2em"
      }}
      onClick={onClick}
      value={value}
      {...restProps}
    >
      {text}
    </button>
  );

  const Members = () =>
    members.map(member => (
      <Button
        onClick={({ target: { value } }) =>
          dispatch(replaceCurrentMember(value))
        }
        value={member}
        key={member}
        data-testid={`member-${member}`}
        text={member}
      />
    ));

  const FullSchedule = () => (
    <Button
      onClick={() => dispatch(replaceCurrentMember(null))}
      text="Full schedule"
    />
  );
  return (
    <div
      data-testid="member-selector"
      css={{
        display: "flex",
        justifyContent: "space-around",
        margin: "2em 0em"
      }}
    >
      <FullSchedule />
      <Members members={members} />
    </div>
  );
};

export default MemberSelector;
