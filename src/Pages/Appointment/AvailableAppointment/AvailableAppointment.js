import { format } from "date-fns";
import React from "react";
import "./AvailableAppointment.css";

const AvailableAppointment = ({ date }) => {
  return (
    <div>
      <div className="text-center text-secondary text-xl">
        <p>Available Appointments on {format(date, "PP")}</p>
      </div>
    </div>
  );
};

export default AvailableAppointment;
