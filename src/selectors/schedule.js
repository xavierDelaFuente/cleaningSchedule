import schedule from "../data/schedule";

export const getSchedule = () => schedule;
export const getScheduleMembersId = () => Object.keys(schedule);
export const getScheduleMembers = () => Object.values(schedule);
export const getMemberSchedule = member => schedule[member];
export const getMemberTask = (member, iteration) =>
  getMemberSchedule(member)[iteration];
