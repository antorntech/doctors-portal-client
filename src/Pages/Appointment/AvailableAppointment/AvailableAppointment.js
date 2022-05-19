import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointService from "../../AppointService/AppointService";
import BookingModal from "../BookingModal/BookingModal";
import "./AvailableAppointment.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Loading from "../../Shared/Loading";

const AvailableAppointment = ({ date }) => {
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, "PP");
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(
      `https://afternoon-caverns-76904.herokuapp.com/available?date=${formattedDate}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="px-5 lg:px-0 my-10">
      <div className="text-center text-secondary text-xl pb-10">
        <p>Available Appointments on {format(date, "PP")}</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services?.map((service) => (
          <AppointService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AppointService>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
