import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1GNCK95exOkSwmAZHQCW1TviBsoK9dZpqMwG1XiUZc1wXxCGL5wPX97Utp5PGHQbXIpfh9qK2glsDeeKJNUtEh00AsfElRRg"
);

const Payment = () => {
  const { appointmentId } = useParams();
  const url = `http://localhost:5000/booking/${appointmentId}`;
  const { data: appointment, isLoading } = useQuery(
    ["booking", appointmentId],
    () =>
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="px-6 lg:px-12">
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-xl text-secondary">
            Hello, {appointment.patientName} ☺
          </p>
          <h2 class="card-title">
            Please pay for{" "}
            <span className="font-bold">"{appointment.treatment}"</span>
          </h2>
          <p>
            Your Appointment:{" "}
            <span className="font-bold">{appointment.date}</span> at{" "}
            <span className="font-bold">{appointment.slot}</span>
          </p>
          <p>
            Please Pay:{" "}
            <span className="text-orange-500">${appointment.price}</span>
          </p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
