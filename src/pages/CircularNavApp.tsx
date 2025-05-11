import { useState, useEffect, ReactNode } from "react";
import { FaHome, FaInfoCircle, FaTools, FaImage, FaPhone } from 'react-icons/fa';

type NavItem = {
  name: string;
  icon: ReactNode;
};

const CircularNavApp = () => {
  const [activeNav, setActiveNav] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: "HOME", icon: <FaHome /> },
    { name: "ABOUT", icon: <FaInfoCircle /> },
    { name: "SERVICES", icon: <FaTools /> },
    { name: "PORTFOLIO", icon: <FaImage /> },
    { name: "CONTACT", icon: <FaPhone /> }
  ];

  useEffect(() => {
    // Auto-rotate navigation items every 3 seconds
    const interval = setInterval(() => {
      if (isNavOpen) {
        setActiveNav((prev) => (prev + 1) % navItems.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isNavOpen, navItems.length]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="relative w-screen h-screen bg-black text-white overflow-hidden font-['Inter']">
      {/* Header */}
      <header className="flex justify-between p-5 md:p-6 relative z-10">
        <div className="flex justify-between w-full">
          <div className="flex gap-2.5">
            <span className="typewriter font-mono text-lg">Turning ideas into visuals</span>
          </div>
          <div>
            <div className="px-5 py-2.5 bg-transparent text-orange-500 border border-orange-500 rounded-full font-medium tracking-wider uppercase transition-all duration-300 hover:bg-orange-500 hover:text-black hover:shadow-[0_0_20px_rgba(255,107,0,0.6),0_0_30px_rgba(255,107,0,0.4)] hover:scale-105 cursor-pointer">
              BECOME A CLIENT-
            </div>
          </div>
        </div>
      </header>

      {/* Logo */}
      <div className="absolute top-[90px] left-[80px]">
        <div className="w-[60px] h-[60px] border border-white/30 rounded-full flex items-center justify-center text-2xl relative before:content-[''] before:absolute before:w-[60px] before:h-[60px] before:border before:border-white/10 before:rounded-full before:scale-[1.2] after:content-[''] after:absolute after:w-[60px] after:h-[60px] after:border after:border-white/10 after:rounded-full after:scale-[1.4]">
          <img src="/placeholder.svg" id="logo" alt="Logo" className="h-[50px] w-[50px]" />
        </div>
      </div>

      {/* Diagonal Ribbon */}
      <div className="absolute top-[30px] right-0 w-[600px] h-[600px] z-5">
        <div className="absolute top-[210px] right-[-130px] w-[800px] h-[40px] bg-white text-black transform rotate-45 overflow-hidden flex items-center transition-colors duration-300">
          <div className="inline-flex gap-5 whitespace-nowrap animate-[scrollText_10s_linear_infinite]">
            <span>WEB DEVELOPMENT</span>
            <span className="px-2.5 text-orange-500">•</span>
            <span>GRAPHICS</span>
            <span className="px-2.5 text-orange-500">•</span>
            <span>ANIMATION</span>
            <span className="px-2.5 text-orange-500">•</span>
            <span>UI-UX</span>
            <span className="px-2.5 text-orange-500">•</span>
            <span>MOTION</span>
          </div>
        </div>
      </div>

      {/* Circular Navigation */}
      <div className={`fixed top-[130px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] z-[100] transition-all duration-500 ${isNavOpen ? "w-[300px] h-[300px]" : ""}`}>
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-black/80 border-2 border-[#4E2BB7] rounded-full cursor-pointer z-[101] flex justify-center items-center shadow-[0_0_15px_#4E2BB7] transition-all duration-300 hover:shadow-[0_0_25px_#4E2BB7]"
          onClick={toggleNav}
        >
          <div className="w-[30px] h-[30px] relative">
            <span className={`absolute w-full h-[2px] bg-[#4E2BB7] transition-all duration-300 ${isNavOpen ? "rotate-45 top-[14px]" : "top-[8px]"}`}></span>
            <span className={`absolute w-full h-[2px] bg-[#4E2BB7] transition-all duration-300 top-[16px] ${isNavOpen ? "opacity-0" : ""}`}></span>
            <span className={`absolute w-full h-[2px] bg-[#4E2BB7] transition-all duration-300 ${isNavOpen ? "-rotate-45 top-[14px]" : "top-[24px]"}`}></span>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-[99]">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-black/80 border border-orange-500/50 rounded-full flex justify-center items-center cursor-pointer transition-all duration-500 shadow-lg ${isNavOpen ? "opacity-100" : "opacity-0"} ${activeNav === index ? "bg-orange-500 border-white shadow-[0_0_20px_rgba(255,107,0,0.8)] scale-110 z-[99]" : "hover:animate-[navPulse_1.5s_infinite]"}`}
              onClick={() => setActiveNav(index)}
              style={{
                transform: `rotate(${(index * 360) / navItems.length}deg) translate(${isNavOpen ? 120 : 0}px) rotate(-${(index * 360) / navItems.length}deg) ${activeNav === index ? "scale(1.2)" : ""}`,
              }}
            >
              <div className="flex flex-col items-center justify-center text-white text-center transition-all duration-300">
                <div className="text-xl mb-1.5">{item.icon}</div>
                <div className={`text-xs font-semibold tracking-wider ${activeNav === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2.5"} transition-all duration-300`}>
                  {item.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Side Text */}
      <div className="absolute left-[30px] top-1/2 -translate-y-1/2 flex flex-col gap-8 z-2">
        <div className="vertical-text [writing-mode:vertical-rl] rotate-180 text-xs tracking-wider text-white/70 transition-colors duration-300 hover:text-orange-500">
          WEB DEVELOPMENT
        </div>
        <div className="vertical-text [writing-mode:vertical-rl] rotate-180 text-xs tracking-wider text-white/70 transition-colors duration-300 hover:text-orange-500">
          GRAPHIC DESIGNING
        </div>
        <div className="vertical-text [writing-mode:vertical-rl] rotate-180 text-xs tracking-wider text-white/70 transition-colors duration-300 hover:text-orange-500">
          DEVELOPMENT
        </div>
      </div>

      {/* Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-3">
        <h1 className="text-5xl font-medium mb-2.5">
          <span className="text-white">Brand</span>
          <span className="text-white">.</span>
          <span className="text-gray-500">Design</span>
          <span className="text-white">.</span>
          <span className="text-gray-500">Product</span>
          <span className="text-white">.</span>
        </h1>
        <h2 className="text-4xl font-medium mb-2.5">In-Hous Development.</h2>
        <h3 className="text-4xl font-medium">&More</h3>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-[100px] left-0 w-full bg-[#222] py-4 flex justify-center gap-5 transform -rotate-6 scale-120 z-4">
        <div className="flex items-center gap-4 text-sm font-medium tracking-wider">
          GRAPHIC DESIGN <span className="w-2 h-2 bg-orange-500 rounded-full inline-block"></span>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium tracking-wider">
          UI/UX <span className="w-2 h-2 bg-orange-500 rounded-full inline-block"></span>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium tracking-wider">
          MARKETING <span className="w-2 h-2 bg-orange-500 rounded-full inline-block"></span>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium tracking-wider">
          WEB PROJECTS <span className="w-2 h-2 bg-orange-500 rounded-full inline-block"></span>
        </div>
        <div className="flex items-center text-sm font-medium tracking-wider">ANIMATION</div>
      </div>

      {/* Play Button */}
      <div className="absolute bottom-[50px] right-[50px] z-7">
        <div className="w-[60px] h-[60px] border border-white/30 rounded-full flex items-center justify-center cursor-pointer before:content-[''] before:absolute before:w-[60px] before:h-[60px] before:border before:border-white/10 before:rounded-full before:animate-[pulse_2s_infinite]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </div>
      </div>

      {/* CSS for animations - would normally go in a style tag or CSS file */}
      <style>{`
        @keyframes typing {
          from { width: 0; }
          to { width: 280px; }
        }
        
        @keyframes scrollText {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.7; }
          70% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
        
        @keyframes navPulse {
          0% { box-shadow: 0 0 0 0 rgba(255, 107, 0, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(255, 107, 0, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 107, 0, 0); }
        }

        .typewriter {
          border-right: 2px solid #ff6b00;
          white-space: nowrap;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default CircularNavApp;