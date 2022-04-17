import { useState, useEffect } from "react";

import { useRouter } from "next/router";

import moment from "moment";

import toast, { Toaster } from "react-hot-toast";

import Calendar from "../components/Calendar";
import Layout from "../components/Layout";
import TimePicker from "../components/TimePicker";

export default function Schedule() {
  const today = moment().format("YYYY-MM-DD");
  const [day, setDay] = useState(today);
  const [time, setTime] = useState("");
  const [scheduledAppointments, setScheduledAppointments] = useState([]);

  const router = useRouter();
  const notify = () => toast.error("Please log in to continue!");
  const fetchScheduledAppointments = async () => {
    let res = await fetch(`http://localhost:8080/appointments?day=${day}`);
    res = await res.json();
    setScheduledAppointments(res.data.map((appointment) => appointment.date));
  };

  useEffect(() => {
    fetchScheduledAppointments();
  }, [day]);

  const schedule = async () => {
    const date = `${day} ${time}`;
    try {
      let res = await fetch("http://localhost:8080/appointments/schedule", {
        method: "POST",
        body: JSON.stringify({
          date,
        }),
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      res = await res.json();
      if (res.success) {
        router.push("/appointments");
      } else {
        notify();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="flex mt-8">
        <Calendar
          selectedDay={day}
          onSelect={(day) => setDay(day)}
          minDay={today}
        />
        <div className="flex flex-col justify-between w-full my-4">
          <h1 className="text-2xl text-dark font-poppins font-semibold capitalize text-center">
            Make an appointment
          </h1>
          <TimePicker
            pickedTime={time}
            onPick={(time) => setTime(time)}
            disabled={(time) =>
              scheduledAppointments?.includes(`${day} ${time}`)
            }
          />
          <button
            onClick={schedule}
            className="self-center w-fit mb-4 rounded-lg font-poppins font-medium bg-primary text-gray-100 shadow py-4 px-6 capitalize"
          >
            schedule appointment
          </button>
          <Toaster
            toastOptions={{
              className: "bg-black",
            }}
          />
        </div>
      </div>
    </Layout>
  );
}
