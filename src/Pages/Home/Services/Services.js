import React from "react";
import "./Services.css";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "../Service/Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description:
        "Fluoride is a mineral that occurs naturally and is released from rocks into the soil, water, and air.",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description:
        "Cavities are permanently damaged areas in the hard surface of your teeth that develop into tiny openings or holes.",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description:
        "Whitening your teeth too often increases the risk of negative side effects, such as tooth sensitivity",
      img: whitening,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center font-bold uppercase lg:pb-10">
        <h3 className="text-primary">our services</h3>
        <h2 className="text-3xl">service we provide</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
