import React from "react";
import "./ExtraBanner.css";
import treatmentImg from "../../../assets/images/treatment.png";
import { useNavigate } from "react-router-dom";

const ExtraBanner = () => {
  const navigate = useNavigate();

  const startAppointment = () => {
    navigate("/appointment");
  };
  return (
    <div className="hero min-h-screen lg:px-12 my-28">
      <div className="hero-content flex-col lg:flex-row lg:px-12">
        <img
          src={treatmentImg}
          className="extraBannerImg rounded-lg shadow-2xl"
        />
        <div className="lg:px-12">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Exceptional Dental Care, on Your Terms!
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button
            onClick={startAppointment}
            className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExtraBanner;
