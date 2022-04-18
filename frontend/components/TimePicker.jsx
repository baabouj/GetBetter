import React from "react";
import TimeBox from "./TimeBox";

export default function TimePicker({ pickedTime, onPick, disabled }) {
  const times = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];
  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4 place-content-center md:ml-8">
      {times.map((time) => (
        <TimeBox
          key={time}
          time={time}
          isPicked={pickedTime == time}
          onPick={onPick}
          disabled={() => disabled(time)}
        />
      ))}
    </div>
  );
}
