import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointService from "../../AppointService/AppointService";
import "./AvailableAppointment.css";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((json) => setServices(json));
  }, []);
  return (
    <div className="px-5 lg:px-0">
      <div className="text-center text-secondary text-xl">
        <p>Available Appointments on {format(date, "PP")}</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <AppointService key={service._id} service={service}></AppointService>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointment;
