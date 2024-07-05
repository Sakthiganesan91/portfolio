import React from "react";
import EmailForm from "./EmailForm";
import ShimmerButton from "./ui/shimmer-button";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 " id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">Wanna Reach me ?</h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let us Discuss about the application you wanna Build
        </p>
        <EmailForm />
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
