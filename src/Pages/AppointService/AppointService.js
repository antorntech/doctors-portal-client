import React from "react";

const AppointService = ({ service }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl place-items-center">
      <div class="card-body place-items-center pt-3 lg:pt-10">
        <h2 class="card-title text-secondary">{name}</h2>
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
        <div class="card-actions">
          <button
            disabled={slots.length === 0}
            className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointService;
