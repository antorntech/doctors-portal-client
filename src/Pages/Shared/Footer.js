import React from "react";
import footerImg from "../../assets/images/footer.png";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer
      className="p-10"
      style={{
        background: `url(${footerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="footer flex flex-col md:flex-row lg:flex-row justify-around">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="text-center mt-10">
        <p>
          Copyright © <span className="text-primary">{year}</span> - All right
          reserved by <span className="text-primary">AM Antor</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
