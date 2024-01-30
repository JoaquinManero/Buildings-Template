import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
// import Link from "react-scroll";

interface MobileNavbarProps {
  isOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  isOpen,
  setIsMenuOpen,
}) => {
  const handleScroll = (sectionId: string) => {
    if (isOpen) setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-screen fixed top-0 z-20">
      <div className="w-1/2 h-screen flex flex-col p-8 bg-background">
        <Image src={logo} alt="logo" className="w-16 object-contain mb-8" />

        <ul>
          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("hero")}>
              Home
            </a>
          </li>

          <li className="mb-5" onClick={() => handleScroll("services")}>
            <a className="menu-item">Services</a>
          </li>

          <li className="mb-5" onClick={() => handleScroll("our-work")}>
            <a className="menu-item">Our Work</a>
          </li>

          <li className="mb-8" onClick={() => handleScroll("testimonials")}>
            <a className="menu-item">Testimonials</a>
          </li>
        </ul>

        <button className="h-10 bg-primary text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-primary md:block">
          Contact Us
        </button>
      </div>

      <div
        onClick={() => {
          setIsMenuOpen(false);
        }}
        className="w-screen h-screen bg-overlayBg fixed top-0 -z-10"
      />
    </div>
  );
};

export default MobileNavbar;
