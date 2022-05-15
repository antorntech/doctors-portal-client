import React from "react";
import Banner from "./Banner/Banner";
import "./Home.css";
import Info from "./Info/Info";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
    </div>
  );
};

export default Home;
