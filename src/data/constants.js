import moment from "moment";

const scheduleInitialDay = new moment(moment("01122019", "DDMM"));
const scheduleCurrentDay = new moment(moment("07122019", "DDMM"));
const week = moment.duration(scheduleCurrentDay.diff(scheduleInitialDay));

export const getCurrentWeek = Math.ceil(week.asWeeks());
