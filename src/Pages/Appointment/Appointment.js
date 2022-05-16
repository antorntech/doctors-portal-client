import React, { useState } from "react";
import Footer from "../Shared/Footer";
import "./Appointment.css";
import AppointmentBanner from "./AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="px-0 lg:px-12">
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvailableAppointment date={date}></AvailableAppointment>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
