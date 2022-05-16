import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    console.log(slot, name, email, phone);
    setTreatment(null);
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-4 justify-items-center mt-3"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              class="input input-bordered input-secondary w-full max-w-xs"
            />
            <select name="slot" class="select select-secondary w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              class="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              class="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              class="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="submit"
              placeholder="Type here"
              class="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
