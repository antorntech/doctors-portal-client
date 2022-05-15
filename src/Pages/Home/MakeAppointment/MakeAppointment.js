import React from "react";
import doctorImg from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctorImg} alt="" />
      </div>
      <div className="flex-1 px-5 lg:px-12">
        <h3 className="text-xl text-primary py-2">Appointment</h3>
        <h2 className="text-3xl text-white py-2">Make an Appointment Today</h2>
        <p className="text-white py-2">
          Appointment sentence example. I can make it to my appointment without
          you. I'll tell my receptionist to make you an appointment for next
          week. After a few questions, she hung up with an appointment scheduled
          for the following Saturday.
        </p>
        <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary my-3">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default MakeAppointment;
