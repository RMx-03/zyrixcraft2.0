"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import '../App.css'
import src from '../assets/DashBoard.jpg'
import Laptop from '../assets/Laptop.png'

type MacbookScrollProps = {
  className?: string;
};

// Shared Lid component
type LidProps = {
  scaleX: any;
  scaleY: any;
  rotate: any;
  translate: any;
  src: string;
};

export const Lid: React.FC<LidProps> = ({ scaleX, scaleY, rotate, translate, src }) => {
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

// Mobile-specific Lid component
export const MobileLid: React.FC<LidProps> = ({ scaleX, scaleY, rotate, translate, src }) => {
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

// Desktop version
export const DesktopMacbookScroll: React.FC<MacbookScrollProps> = ({ className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const rotatingWords = ["web", "UI", "graphics", "Creativity", "Strategy"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingWords.length);
      }, 1000);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const scaleX = useTransform(
    scrollYProgress, 
    [0, 0.3], 
    [1.2, 2.0]
  );
   
  const scaleY = useTransform(
    scrollYProgress, 
    [0, 0.3], 
    [0.6, 1.5]
  );
   
  const translate = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.5, 0.7], 
    [0, 600, 750, 850]
  );
  
  const rotate = useTransform(
    scrollYProgress, 
    [0.1, 0.12, 0.3], 
    [-28, -28, 0]
  );

  return (
    <div
      ref={ref}
      className={`flex shrink-0 transform flex-col items-start justify-start py-0 
             min-h-[200vh] scale-100 pt-0 ${className}`}>
      <div className="w-full flex flex-col items-center pt-0 mt-0 mb-0">
        <div className="w-full flex justify-center mt-0">
          <div className="text-white text-3xl font-semibold flex gap-2 mb-12">
            <span>Designing the future of your brand with</span>
            <span className="text-orange-600 transition-opacity duration-1000">
              {'{'}{rotatingWords[index]}{'}'}
            </span>
            <span>.</span>
          </div>
        </div>
        
        <div className="w-full flex justify-center overflow-visible pb-[30vh]">
          <Lid
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

// Tablet version
export const TabletMacbookScroll: React.FC<MacbookScrollProps> = ({ className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const rotatingWords = ["web", "UI", "graphics", "Creativity", "Strategy"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingWords.length);
      }, 1000);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const scaleX = useTransform(
    scrollYProgress, 
    [0.05, 0.35], 
    [1.2, 1.6]
  );
   
  const scaleY = useTransform(
    scrollYProgress, 
    [0.05, 0.35], 
    [0.6, 1.5]
  );
   
  const translate = useTransform(
    scrollYProgress, 
    [0.05, 0.7], 
    [0, 1200]
  );
  
  const rotate = useTransform(
    scrollYProgress, 
    [0.05, 0.1, 0.35], 
    [-28, -28, 0]
  );

  return (
    <div
      ref={ref}
      className={`flex shrink-0 transform flex-col items-center justify-start
             min-h-[80vh] scale-75 py-10 ${className}`}>
      <div className="w-[800px]">
        <div className="w-full mb-12">
          <div className="flex justify-center items-center w-full">
            <div className="flex gap-2 text-3xl font-bold text-white">
              <span>Designing the future of your brand with</span>
              <span className="text-orange-600 transition-opacity duration-1000">
                {'{'}{rotatingWords[index]}{'}'}
              </span>
              <span>.</span>
            </div>
          </div>
        </div>

        <div className="mt-8 w-full">
          <Lid
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

// Mobile version
export const MobileMacbookScroll: React.FC<MacbookScrollProps> = ({ className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const rotatingWords = ["web", "UI", "graphics", "Creativity", "Strategy"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingWords.length);
      }, 1000);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const scaleX = useTransform(
    scrollYProgress, 
    [0.05, 0.4], 
    [1.2, 2]
  );
   
  const scaleY = useTransform(
    scrollYProgress, 
    [0.05, 0.4], 
    [0.6, 2]
  );
   
  const translate = useTransform(
    scrollYProgress, 
    [0.05, 0.6], 
    [0, 800]
  );
  
  const rotate = useTransform(
    scrollYProgress, 
    [0.05, 0.1, 0.4], 
    [-28, -28, 0]
  );

  return (
    <div
      ref={ref}
      className={`flex shrink-0 transform flex-col items-center justify-start py-0 
             min-h-[150vh] scale-[0.6] ${className}`}>
      <div className="w-full flex flex-col items-center">
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

// Main wrapper component that renders the appropriate version based on screen size
export const MacbookScroll: React.FC<MacbookScrollProps> = ({ className = "" }) => {
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDeviceType('mobile');
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1366) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    // Initial check
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (deviceType === 'mobile') {
    return <MobileMacbookScroll className={className} />;
  } else if (deviceType === 'tablet') {
    return <TabletMacbookScroll className={className} />;
  } else {
    return <DesktopMacbookScroll className={className} />;
  }
};