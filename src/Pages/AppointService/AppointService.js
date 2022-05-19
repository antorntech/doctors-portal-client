import React from "react";

const AppointService = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl place-items-center">
      <div className="card-body place-items-center pt-3 lg:pt-10">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try Another Date</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p>
          <small>Price: ${price}</small>
        </p>
        <div className="card-actions">
          <label
            htmlFor="booking-modal"
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            className="btn btn-sm btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointService;
