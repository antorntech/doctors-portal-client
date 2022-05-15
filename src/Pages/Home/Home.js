import React from "react";
import Banner from "./Banner/Banner";
import ExtraBanner from "./ExtraBanner/ExtraBanner";
import "./Home.css";
import HomeContact from "./HomeContact/HomeContact";
import Info from "./Info/Info";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="px-5 lg:px-12">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <ExtraBanner></ExtraBanner>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <HomeContact></HomeContact>
    </div>
  );
};

export default Home;
