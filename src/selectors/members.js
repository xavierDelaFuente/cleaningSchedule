import { createSelector } from "reselect";

export const getCurrentMember = createSelector(
  state => state.schedule.currentMember
);
