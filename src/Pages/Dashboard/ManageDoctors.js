import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const ManageDoctors = () => {
  const { data: doctors, isLoading } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="lg: px-12">
      <h2 className="text-xl py-2">Manage Doctors {doctors.length}</h2>
    </div>
  );
};

export default ManageDoctors;
