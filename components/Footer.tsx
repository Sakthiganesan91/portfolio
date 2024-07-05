import React from "react";
import ShimmerButton from "./ui/shimmer-button";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 " id="contact">
      <div className="w-full absolute left-0 -bottom-72 pt-20 pb-10 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">Wanna Reach me ?</h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let us Discuss
        </p>
        <a href="mailto:sakthiganesan158@gmail.com">
          <ShimmerButton buttonName="Let's Get In Touch" />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col  justify-between items-center">
        <p className="md:text-base text-5m md:font-normal font-light">
          Copyright © 2024 Sakthiganesan G
        </p>
      </div>
    </footer>
  );
};

export default Footer;
