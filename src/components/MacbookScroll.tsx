"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import '../App.css';
import desktopSrc from '../assets/DashBoard.jpg';
import Laptop from '../assets/Laptop.png';
import mobileSrc from '../assets/MobileMockup.jpg';
import MobileMockup from '../assets/MobileScreen.webp'; // You can use any free PNG

export const MacbookScroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);
  const rotatingWords = ["web", "UI", "graphics", "Creativity", "Strategy"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const checkDevice = () => {
      const isPortrait = window.innerHeight > window.innerWidth;
      if (window.innerWidth < 768 || isPortrait) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const scaleX = useTransform(scrollYProgress, [0, 0.3], [1.2, isMobile ? 1 : 2.5]);
  const scaleY = useTransform(scrollYProgress, [0, 0.3], [0.6, isMobile ? 1 : 1.8]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);

  return (
    <div
      ref={ref}
      className="flex shrink-0 transform flex-col items-center justify-start py-0 
             min-h-[120vh] scale-[0.6] [perspective:800px] 
             sm:min-h-[180vh] sm:scale-[0.7] 
             md:min-h-[280vh] md:scale-100 md:py-80"
    >
      <div className="text-[23px] w-[200vw] text-white absolute -top-35 -left-15 md:top-56 md:left-[25%] md:text-3xl font-semibold flex gap-2">
        <span>Designing the future of your brand with</span>
        <span className="text-orange-600 transition-opacity duration-1000">
          {'{'}{rotatingWords[index]}{'}'}
        </span>
        <span>.</span>
      </div>

      {isMobile ? (
        <MobileView
          src={mobileSrc}
          scaleX={scaleX}
          scaleY={scaleY}
          rotate={rotate}
          translate={translate}
        />
      ) : (
        <MacbookView
          src={desktopSrc}
          scaleX={scaleX}
          scaleY={scaleY}
          rotate={rotate}
          translate={translate}
        />
      )}
    </div>
  );
};

type ViewProps = {
  scaleX: any;
  scaleY: any;
  rotate: any;
  translate: any;
  src: string;
};

const MacbookView: React.FC<ViewProps> = ({ scaleX, scaleY, rotate, translate, src }) => (
  <div className="relative mx-auto flex justify-center items-center [perspective:800px] w-full max-w-[90vw]">
    <img
      src={Laptop}
      alt="Laptop"
      className="w-full max-w-[41em] h-auto relative -top-7"
    />
    <motion.div
      style={{
        scaleX: scaleX,
        scaleY: scaleY,
        rotateX: rotate,
        translateY: translate,
        transformStyle: "preserve-3d",
        transformOrigin: "top",
      }}
      className="absolute inset-0 mx-auto h-96 w-full max-w-[32rem] rounded-2xl bg-[#010101] p-2"
    >
      <div className="absolute inset-0 rounded-lg bg-[#272729]" />
      <img
        src={src}
        alt="Laptop screen"
        className="absolute inset-0 h-full w-full rounded-lg object-cover object-left-top"
      />
    </motion.div>
  </div>
);

const MobileView: React.FC<ViewProps> = ({ translate, src }) => (
  <div className="relative w-full flex justify-center items-center px-4">
    {/* Set specific width to make it broader */}
    <div className="relative w-auto"> {/* Adjust width to match new mockup width */}
      
      {/* Mobile Frame */}
      <img
        src={MobileMockup}
        alt="Mobile Frame"
        className="w-full h-auto z-10 pointer-events-none select-none"
      />

      {/* Screen container inside mockup */}
      <motion.div
        style={{
          translateY: translate,
        }}
        className="absolute top-[9.3%] left-[30.5%] w-[81%] h-[82%] 
                    overflow-hidden z-0 "
      >
        <img
          src={src}
          alt="Mobile screen"
          className="w-auto h-full object-cover"
        />
      </motion.div>
    </div>
  </div>
);
