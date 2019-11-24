import moment from "moment";

const scheduleInitialDay = new moment(moment("03112019", "DDMM"));
const scheduleCurrentDay = new moment(moment());
const week = moment.duration(scheduleCurrentDay.diff(scheduleInitialDay));

export const getCurrentWeek = Math.floor(week.asWeeks()) % 4;
