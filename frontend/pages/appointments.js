import { useState, useEffect } from "react";

import Layout from "../components/Layout";

import {
  IoTimeOutline,
  IoCalendarOutline,
  IoTrashOutline,
} from "react-icons/io5";
import moment from "moment";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);

  const cancelAppointment = async (id) => {
    try {
      let res = await fetch(`http://localhost:8080/appointments/cancel`, {
        method: "POST",
        body: JSON.stringify({
          id,
          token: sessionStorage.getItem("token"),
        }),
      });
      res = await res.json();
      if (res.success) {
        setAppointments(
          appointments.filter((appointment) => appointment.id !== id)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAppointments = async () => {
    let res = await fetch("http://localhost:8080/user/appointments", {
      method: "POST",
      body: JSON.stringify({
        token: sessionStorage.getItem("token"),
      }),
    });
    res = await res.json();
    setAppointments(
      res?.data?.map(({ id, date }) => {
        return {
          id,
          day: moment(date).format("YYYY-MM-DD"),
          time: moment(date).format("HH:00"),
        };
      })
    );
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <Layout>
      <h1 className="text-3xl text-dark font-poppins font-semibold py-8">
        My Appointments
      </h1>
      <div className="grid grid-cols-2 gap-4 min-h-[50vh]">
        {appointments?.length ? (
          appointments.map(({ id, day, time }, idx) => (
            <div
              key={idx}
              className="flex justify-evenly items-center h-fit border border-primary shadow rounded p-2"
            >
              <div className="flex items-center text-lg font-poppins">
                <IoCalendarOutline className="text-xl text-primary" />
                <p className="px-2">{day}</p>
              </div>
              <div className="flex items-center text-lg font-poppins">
                <IoTimeOutline className="text-xl text-primary" />
                <p className="px-2">{time}</p>
              </div>
              <button
                onClick={() => cancelAppointment(id)}
                className="flex items-center text-lg font-poppins"
              >
                <IoTrashOutline className="text-xl text-red-600" />
                <p className="px-2">Cancel</p>
              </button>
            </div>
          ))
        ) : (
          <p className="flex items-center text-lg font-poppins">
            You don&apos;t have any appointments
          </p>
        )}
      </div>
    </Layout>
  );
}
