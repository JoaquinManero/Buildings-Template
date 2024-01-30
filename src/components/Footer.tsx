/* eslint-disable @next/next/no-img-element */
import React from "react";
import LogoImg from "../assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto bg-dimBlue">
        <div className="flex flex-col items-center justify-center p-8">
          <Image className="w-20 mb-6" src={LogoImg} alt="logo" />

          <ul className="flex justify-center gap-6 flex-wrap">
            <li>
              <a href="" className="text-xs text-darkBlue hover:font-medium">
                About US
              </a>
            </li>
            <li>
              <a href="" className="text-xs text-darkBlue hover:font-medium">
                Contact Us
              </a>
            </li>
            <li>
              <a href="" className="text-xs text-darkBlue hover:font-medium">
                Services
              </a>
            </li>
            <li>
              <a href="" className="text-xs text-darkBlue hover:font-medium">
                Terms & Condition
              </a>
            </li>
            <li>
              <a href="" className="text-xs text-darkBlue hover:font-medium">
                Get Quote
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-darkBlue text-xs text-white text-center p-4">
        © 2024. All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
