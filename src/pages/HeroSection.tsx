import { useState, useEffect } from "react";
import HeroSectionLeftText from "../components/HeroSectionLeftText";
import HeroSectionStripOne from "../components/HeroSectionStripOne";
import HeroSectionStripTwo from "../components/HeroSectionStripTwo";
import HeroSectionTopLeftText from "../components/HeroSectionTopLeftText";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import '../style/HeroSection.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import logo from "../assets/ZyrixcraftLogo.webp";
const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleNavBar = () => {
    setIsOpen(!isOpen);
  };
  
  // Close navbar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const hamburgerButton = document.getElementById('hamburger-button');
      const mobileNav = document.getElementById('mobile-nav');
      
      if (isOpen && 
          hamburgerButton && 
          mobileNav && 
          !hamburgerButton.contains(event.target as Node) && 
          !mobileNav.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  
  return (
    <div id="Home" className="h-screen pb-5 md:pb-0 overflow-hidden flex flex-col items-center justify-center px-4 md:px-8 relative ">
      <div className="image-cover bg-no-repeat brightness-50 z-0 md:top-37 md:left-28   absolute">
        <img src={logo} alt="Temp" className=" md:w-2xs " />
      </div>
      <div 
        id="hamburger-button"
        onClick={handleNavBar} 
        className="z-100 block fixed top-5 right-[1em] text-2xl md:hidden text-white cursor-pointer p-2"
      > 
        {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
      </div>
      <Button  />
      
       {/* Desktop Nav */}
       <div className="hidden md:block">
        <NavBar setIsOpen={setIsOpen}/>
      </div>

      {/* Mobile Nav */}
      <div 
        id="mobile-nav"
        className={`block md:hidden fixed top-12 right-0 w-full bg-black text-white z-50 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <NavBar setIsOpen={setIsOpen}/>
      </div>
      
      <div className="  z-10 absolute top-1/3  ">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight  ">
          <span className="text-white">We</span>
          <span className="text-white/60"> Transform</span>
          <span className="text-white/60"> Ideas</span>
        </h1>
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl mt-6 sm:mt-8 text-left text-white font-medium">
          Into Impactful Digital
        </p>
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl mt-6 sm:mt-8 text-left text-white font-medium">
          Experiences.
        </p>
      </div>
      <HeroSectionTopLeftText />
      <HeroSectionLeftText />
      <div className="btm-banner  ">
        <HeroSectionStripOne />
      </div>
      <div className="hidden md:block">

        <HeroSectionStripTwo />

      </div>
    </div>
  );
};
export default HeroSection;
