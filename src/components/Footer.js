import React from "react";

const Footer = () => {
  return (
    <footer className="self-stretch bg-darkslateblue flex flex-row items-start justify-center py-[2.018rem] px-[1.25rem] gap-[0.243rem] text-center text-[1.338rem] text-text-inverse font-heading-h6 mq825:flex-wrap">
      <b className="relative leading-[150%] inline-block min-w-[7.938rem] mq450:text-[1.063rem] mq450:leading-[1.625rem]">
        Copyright ©
      </b>
      <b className="relative leading-[150%] inline-block min-w-[3.375rem] mq450:text-[1.063rem] mq450:leading-[1.625rem]">
        2024
      </b>
      <b className="relative leading-[150%] inline-block min-w-[4.875rem] mq450:text-[1.063rem] mq450:leading-[1.625rem]">
        Greattr
      </b>
      <b className="relative leading-[150%] mq450:text-[1.063rem] mq450:leading-[1.625rem]">
        All Rights Reserved
      </b>
    </footer>
  );
};

export default Footer;
