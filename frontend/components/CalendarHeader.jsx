import moment from "moment";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const CalendarHeader = ({ day, changeMonth }) => {
  const currentMonth = moment(day).format("MMMM YYYY");
  const weekdayshort = moment.weekdaysShort();
  let weekdayshortname = weekdayshort.map((day) => {
    return (
      <div key={day} className="flex flex-col justify-center items-center p-2">
        <h2 className="uppercase text-lg text-dark/80 font-poppins mx-2 p-2">
          {day.charAt(0)}
        </h2>
      </div>
    );
  });
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-evenly items-center bg-primary text-surface rounded-full mx-4 py-2">
        <button onClick={() => changeMonth("prev")}>
          <IoChevronBack className="text-lg" />
        </button>
        <h2 className="uppercase text-center text-lg font-poppins">
          {currentMonth}
        </h2>
        <button onClick={() => changeMonth("next")}>
          <IoChevronForward className="text-lg" />
        </button>
      </div>
      <div className="flex justify-between items-center">
        {weekdayshortname}
      </div>
    </div>
  );
};

export default CalendarHeader;
