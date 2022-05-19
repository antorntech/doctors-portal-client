import React from "react";
import "./Banner.css";
import chair from "../../../assets/images/chair.png";
import backgroundImg from "../../../assets/images/bg.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const startAppointment = () => {
    navigate("/appointment");
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img className="bannerImg" src={chair} />
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold">
            Your New Smile Starts Here!
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
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

export default Banner;
