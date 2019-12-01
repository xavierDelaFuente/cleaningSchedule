import schedule from "../data/schedule";
import { getCurrentWeek } from "../data/constants";

export const SCHEDULE_ROWS = 6;

export const getSchedule = () => schedule;
export const getScheduleMembersId = () => Object.keys(schedule);
export const getScheduleMembers = () => Object.values(schedule);
export const getMemberSchedule = member => schedule[member];
export const getMemberTask = (member, iteration) =>
  getMemberSchedule(member)[iteration];

const getRows = (values, b) => {
  let result = [];
  for (var i = 0; i < SCHEDULE_ROWS; i++) {
    result.push(values[b][(i + getCurrentWeek) % 4]);
  }
  return result;
};

const reducer = (accumulator, member) => ({ ...accumulator, ...member });

export const getCurrentSchedule = () => {
  var scheduleValues = getScheduleMembers();
  var scheduleKeys = getScheduleMembersId();

  const wholeSchedule = scheduleKeys.map((a, b) => ({
    [a]: getRows(scheduleValues, b)
  }));
  return wholeSchedule.reduce(reducer);
};
