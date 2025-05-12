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
  // For tablet
  const scaleX = useTransform(
    scrollYProgress, 
    [0, 0.3], 
    [1.2, isMobile ? 1 : isTablet ? 1.4 : 2]
  );
  
  const scaleY = useTransform(
    scrollYProgress, 
    [0, 0.3], 
    [0.6, isMobile ? 1 : isTablet ? 1.3 : 1.8]
  );
  
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);

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
             min-h-[120vh] scale-[0.6] [perspective:800px] 
             sm:min-h-[180vh] sm:scale-[0.7] 
             md:min-h-[280vh] md:scale-100 md:py-80
             tablet:min-h-[80vh] tablet:scale-75 tablet:py-10 tablet:flex-col tablet:justify-start tablet:items-center ${className}`}>

      {/* Tablet-specific wrapper with fixed width */}
      <div className="hidden tablet:block tablet:w-[800px]">
        {/* Non-tablet mode text positioning */}
        <div className="text-[23px] w-[200vw] text-white absolute -top-35 -left-15 
                       md:top-56 md:left-[25%] md:text-3xl 
                       font-semibold flex gap-2 tablet:hidden">
          {textContent}
        </div>

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

      {/* Original content for non-tablet views */}
      <div className="tablet:hidden w-full">
        <div className="text-[23px] w-[200vw] text-white absolute -top-35 -left-15 
                       md:top-56 md:left-[25%] md:text-3xl 
                       font-semibold flex gap-2">
          {textContent}
        </div>
        
        <Lid
          src={src}
          scaleX={scaleX}
          scaleY={scaleY}
          rotate={rotate}
          translate={translate} />
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
export const Lid: React.FC<Lid> = ({ scaleX, scaleY, rotate, translate, src }) => {
  return (
    <div className="relative mx-auto flex justify-center items-center [perspective:800px] w-full max-w-[90vw] tablet:max-w-[800px]">
      {/* Laptop Image */}
      <img
        src={Laptop}
        alt=""
        className="w-full max-w-[41em] h-auto relative -top-7 tablet:max-w-[32em]"
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
        className="absolute inset-0 mx-auto h-96 w-full max-w-[32rem] rounded-2xl bg-[#010101] p-2 tablet:max-w-[26rem]"
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

