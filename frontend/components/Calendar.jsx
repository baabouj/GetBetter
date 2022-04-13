import { useState, useEffect } from "react";

import moment from "moment";

import CalendarHeader from "./CalendarHeader";

import { getDaysInMonth } from "../utils/getDaysInMonth";

const Calendar = ({ onSelect, selectedDay, minDay }) => {
  const [data, setData] = useState([]);
  const [dayOfMonth, setDayOfMonth] = useState(moment().format("YYYY-MM-DD"));

  useEffect(() => {
    setData(getDaysInMonth(dayOfMonth));
  }, [dayOfMonth]);

  const changeMonth = (type) => {
    if (type == "next") {
      const day = moment(dayOfMonth).add(1, "M");
      setData(getDaysInMonth(day));
      setDayOfMonth(day);
    } else {
      const day = moment(dayOfMonth).subtract(1, "M");
      setData(getDaysInMonth(day));
      setDayOfMonth(day);
    }
  };

  const Item = ({ data }) => {
    return (
      <div className="grid grid-cols-7">
        {data?.map((day, i) => {
          const dayNumber = moment(day).format("DD");
          const isToday = day == moment().format("YYYY-MM-DD");

          const isWeekend =
            moment(day).format("ddd") == "Sat" ||
            moment(day).format("ddd") == "Sun";

          const isSelected = day == selectedDay;
          return (
            <button
              disabled={day < moment(minDay).format("YYYY-MM-DD") || isWeekend}
              className={`flex items-center justify-center w-12 h-12 border ${
                isToday ? "border-primary border-dashed" : " border-transparent"
              } hover:border-primary m-2 rounded-full transition ${
                isSelected && "bg-primary text-surface"
              } disabled:opacity-50`}
              key={`${day}-${i}`}
              onClick={() => onSelect(day)}
            >
              <h1
                className={`text-lg font-poppins p-2 m-2 ${
                  isWeekend && "text-red-600"
                }`}
              >
                {dayNumber}
              </h1>
            </button>
          );
        })}
      </div>
    );
  };

  const renderItem = () =>
    data.map((item, i) => <Item data={item} key={`${Math.round()}-${i}`} />);

  if (!data.length) return null;

  return (
    <div className="flex flex-col">
      <CalendarHeader day={dayOfMonth} changeMonth={changeMonth} />
      {renderItem()}
    </div>
  );
};

export default Calendar;
