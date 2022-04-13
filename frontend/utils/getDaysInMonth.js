import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

export const getDaysInMonth = (dayOfMonth) => {
  const year = moment(dayOfMonth).format("YYYY");
  const month = moment(dayOfMonth).format("MM") - 1;
  const startDate = moment([year, month]);

  const firstDay = moment(startDate).startOf("month");
  const lastDay = moment(startDate).endOf("month");
  const monthRange = moment.range(firstDay, lastDay);
  const weeks = [];
  const days = Array.from(monthRange.by("day"));
  days.forEach((it) => {
    if (!weeks.includes(it.week())) {
      weeks.push(it.week());
    }
  });

  const daysInAMonth = [];
  weeks.forEach((week) => {
    const firstWeekDay = moment([year, month]).week(week).day(0);
    const lastWeekDay = moment([year, month]).week(week).day(6);
    const weekRange = moment.range(firstWeekDay, lastWeekDay);
    daysInAMonth.push(
      Array.from(weekRange.by("day")).map((m) => m.format("YYYY-MM-DD"))
    );
  });

  return daysInAMonth;
};
