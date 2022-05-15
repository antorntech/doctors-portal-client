import React from "react";
import "./InfoCard.css";

const InfoCard = ({ img, cardTitle, bgClass }) => {
  return (
    <div className={`card lg:card-side shadow-xl bg-accent ${bgClass}`}>
      <figure className="p-4 lg:pl-5">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-white p-5 lg:p-10">
        <h2 className="card-title">{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
