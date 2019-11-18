import { REPACE_CURRENT_MEMBER } from "../actions/members";

const initalState = {
  currentMember: null
};

const online = (state = initalState, action) => {
  switch (action.type) {
    case REPACE_CURRENT_MEMBER:
      return {
        ...state,
        currentMember: action.member
      };
    default:
      return state;
  }
};

export default online;
