import React, { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { UserContext } from "../../../../App";
import Sidebar from "../../../Common/Sidebar/Sidebar";
import AppointmentByDate from "../AppointmentByDate/AppointmentByDate";
import "./DashboardAppointment.css";

const DashboardAppointment = () => {
  const { loggedInUser } = useContext(UserContext);
  const [appointment, setAppointment] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const convertedToDateString = selectedDate.toDateString();

  const handleDataLoad = () => {
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    const token = sessionStorage.getItem("token");
    if (userInfo) {
      if (userInfo.email && token) {
        fetch("https://api-doctors-portal.onrender.com/appointmentsByDate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            convertedToDateString,
            email: userInfo.email,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              setAppointment(data);
            }
          })
          .catch((error) => console.log(error));
      }
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      setTimeout(() => {
        handleDataLoad();
      }, 3500);
    }
    if (token) {
      handleDataLoad();
    }
  }, [selectedDate]);

  return (
    <main className="d_board_appoint_container">
      <div className="row">
        <div className="col-md-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-md-10 pt-3">
          <div className="d-flex justify-content-between">
            <div>
              <h3>Appointments</h3>
            </div>
            <div className="user_photo">
              {loggedInUser.photo ? (
                <img
                  className="rounded-circle border border-info"
                  src={loggedInUser.photo}
                  alt=""
                />
              ) : (
                <>
                  {loggedInUser.name && (
                    <h1 className="bg-info rounded-circle p-1 mr-5">
                      {loggedInUser.name.slice(0, 1)}
                    </h1>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-5 d_board_div_container">
              <Calendar
                className="react_calender"
                onChange={(data) => setSelectedDate(data)}
                value={selectedDate}
              />
            </div>
            <div className="col-md-5 d_board_div_container">
              <AppointmentByDate
                selectedDate={selectedDate}
                appointment={appointment}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardAppointment;
