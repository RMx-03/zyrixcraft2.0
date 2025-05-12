"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import '../App.css'
import src from '../assets/DashBoard.jpg'
import Laptop from '../assets/Laptop.png'

type MacbookScrollProps = {
  className?: string;
};

export const MacbookScroll: React.FC<MacbookScrollProps> = ({ className = "" }) => {
  const ref = useRef(null);
  
  // Different scroll configurations for different device types
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const rotatingWords = ["web", "UI", "graphics", "Creativity", "Strategy"];

  useEffect(() => {
    if (window) {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1366) {
        setIsTablet(true);
      }
    }

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setIsTablet(false);
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1366) {
        setIsTablet(true);
        setIsMobile(false);
      } else {
        setIsMobile(false);
        setIsTablet(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingWords.length);
      }, 1000);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // Different scale values for different device types
  // For tablet - increased scale values and adjusted animation timing
  const scaleX = useTransform(
    scrollYProgress, 
    // Different input ranges for different devices
    isMobile ? [0.05, 0.4] : isTablet ? [0.05, 0.35] : [0, 0.3], 
    // Different output ranges for different devices
    [1.2, isMobile ? 2 : isTablet ? 1.6 : 2.2]
  );
   
  const scaleY = useTransform(
    scrollYProgress, 
    // Different input ranges for different devices
    isMobile ? [0.05, 0.4] : isTablet ? [0.05, 0.35] : [0, 0.3], 
    // Different output ranges for different devices
    [0.6, isMobile ? 2 : isTablet ? 1.5 : 1.7]
  );
   
  // Adjust translate and rotate animations to match the new timing for tablet
  const translate = useTransform(
    scrollYProgress, 
    isMobile ? [0.05, 0.6] : isTablet ? [0.05, 0.7] : [0, 1], 
    [0, isMobile ? 800 : isTablet ? 1200 : 1500]
  );
  
  const rotate = useTransform(
    scrollYProgress, 
    isMobile ? [0.05, 0.1, 0.4] : isTablet ? [0.05, 0.1, 0.35] : [0.1, 0.12, 0.3], 
    [-28, -28, 0]
  );

  // Text content with rotating words for reuse
  const textContent = (
    <>
      <span>Designing the future of your brand with</span>
      <span className="text-orange-600 transition-opacity duration-1000">
        {'{'}{rotatingWords[index]}{'}'}
      </span>
      <span>.</span>
    </>
  );

  return (
    <div
      ref={ref}
      className={`flex shrink-0 transform flex-col items-center justify-start py-0 
             min-h-[150vh] scale-[0.6] [perspective:800px] 
             sm:min-h-[180vh] sm:scale-[0.7] 
             md:min-h-[180vh] md:scale-100 md:pt-0 md:items-center
             tablet:min-h-[80vh] tablet:scale-75 tablet:py-10 tablet:flex-col tablet:justify-start tablet:items-center ${className}`}>

      {/* Tablet-specific wrapper with fixed width */}
      <div className="hidden tablet:block tablet:w-[800px]">
        {/* Tablet-specific container structure */}
        <div className="hidden tablet:block tablet:w-full tablet:mb-12">
          {/* Tablet mode text container */}
          <div className="tablet:flex tablet:justify-center tablet:items-center tablet:w-full">
            <div className="tablet:flex tablet:gap-2 tablet:text-3xl tablet:font-bold text-white">
              {textContent}
            </div>
          </div>
        </div>

        {/* Lid - completely separate from text containers */}
        <div className="tablet:mt-8 w-full">
          <Lid
            src={src}
            scaleX={scaleX}
            scaleY={scaleY}
            rotate={rotate}
            translate={translate} />
        </div>
      </div>

      {/* Desktop view content */}
      <div className="hidden md:block tablet:hidden w-full md:flex-col md:items-center md:pt-0 md:mt-0 md:mb-12 md:-translate-y-64">
        <div className="w-full flex justify-center mt-0">
          <div className="text-white text-3xl font-semibold flex gap-2 mb-16">
            {textContent}
          </div>
        </div>
        
        <div className="w-full flex justify-center">
          <Lid
            src={src}
            scaleX={scaleX}
            scaleY={scaleY}
            rotate={rotate}
            translate={translate} />
        </div>
      </div>

      {/* Mobile view content - completely redesigned */}
      <div className="md:hidden tablet:hidden w-full flex flex-col items-center">
        {/* Mobile text positioning - centered above laptop */}
        <div className="w-full text-white text-center mb-6 px-4">
          <div className="flex flex-col gap-1 text-xl font-semibold">
            <div className="flex flex-wrap justify-center gap-1">
              <span>Designing the future of</span>
              <span>your brand with</span>
            </div>
            <span className="text-orange-600 transition-opacity duration-1000 text-center">
              {'{'}{rotatingWords[index]}{'}'}
            </span>
            <span>.</span>
          </div>
        </div>
        
        {/* Mobile Lid with adjusted sizing */}
        <div className="w-full mt-2 flex justify-center">
          <MobileLid
            src={src}
            scaleX={scaleX}
            scaleY={scaleY}
            rotate={rotate}
            translate={translate} />
        </div>
      </div>
    </div>
  );
};


type Lid = {
  scaleX: any;
  scaleY: any;
  rotate: any;
  translate: any;
  src: string;
};

// Special mobile-only version of the Lid component 
type MobileLidProps = {
  scaleX: any;
  scaleY: any;
  rotate: any;
  translate: any;
  src: string;
};

export const MobileLid: React.FC<MobileLidProps> = ({ scaleX, scaleY, rotate, translate, src }) => {
  return (
    <div className="relative mx-auto flex justify-center items-center [perspective:300px] w-full max-w-[320px]">
      {/* Laptop Image */}
      <img
        src={Laptop}
        alt=""
        className="w-full max-w-[320px] h-auto relative -top-2"
      />

      {/* Lid Display */}
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="absolute inset-0 mx-auto h-[150px] w-[254px] rounded-xl bg-[#010101] p-1.5 top-[0px]"
      >
        <div className="absolute inset-0 rounded-lg bg-[#272729]" />
        <img
          src={src}
          alt="aceternity logo"
          className="absolute inset-0 h-full w-full rounded-lg object-cover object-left-top"
        />
      </motion.div>
    </div>
  );
};

export const Lid: React.FC<Lid> = ({ scaleX, scaleY, rotate, translate, src }) => {
  return (
    <div className="relative mx-auto flex justify-center items-center [perspective:800px] w-full max-w-[90vw] tablet:max-w-[800px] md:max-w-[1000px]">
      {/* Laptop Image */}
      <img
        src={Laptop}
        alt=""
        className="w-full max-w-[41em] h-auto relative -top-7 tablet:max-w-[32em] md:max-w-[41em]"
      />

      {/* Lid Display */}
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="absolute inset-0 mx-auto h-96 w-full max-w-[32rem] rounded-2xl bg-[#010101] p-2 tablet:max-w-[26rem] md:max-w-[32rem]"
      >
        <div className="absolute inset-0 rounded-lg bg-[#272729]" />
        <img
          src={src}
          alt="aceternity logo"
          className="absolute inset-0 h-full w-full rounded-lg object-cover object-left-top"
        />
      </motion.div>
    </div>
  );
};

