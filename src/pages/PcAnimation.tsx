import React, { useEffect } from 'react';
import { MacbookScroll } from '../components/MacbookScroll';

const PcAnimation: React.FC = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @media (min-width: 768px) and (max-width: 1366px) {
        .tablet\\:flex { display: flex; }
        .tablet\\:block { display: block; }
        .tablet\\:flex-col { flex-direction: column; }
        .tablet\\:justify-center { justify-content: center; }
        .tablet\\:items-center { align-items: center; }
        .tablet\\:min-h-\\[120vh\\] { min-height: 120vh; }
        .tablet\\:scale-75 { transform: scale(0.75); }
        .tablet\\:py-0 { padding-top: 0; padding-bottom: 0; }
        .tablet\\:py-10 { padding-top: 2.5rem; padding-bottom: 2.5rem; }
        .tablet\\:mb-8 { margin-bottom: 2rem; }
        .tablet\\:mb-12 { margin-bottom: 3rem; }
        .tablet\\:mt-4 { margin-top: 1rem; }
        .tablet\\:mt-8 { margin-top: 2rem; }
        .tablet\\:hidden { display: none; }
        .tablet\\:w-full { width: 100%; }
        .tablet\\:w-\\[800px\\] { width: 800px; }
        .tablet\\:text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
        .tablet\\:font-bold { font-weight: 700; }
      }
      
      /* Mobile-specific styles */
      @media (max-width: 767px) {
        .scale-\\[0\\.85\\] { transform: scale(0.85); }
        .min-h-\\[90vh\\] { min-height: 90vh; }
        .py-10 { padding-top: 2.5rem; padding-bottom: 2.5rem; }
        .mobile-view { margin-bottom: -30vh; }
      }
      
      /* Desktop-specific styles */
      @media (min-width: 1367px) {
        .desktop-centered {
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          width: 100%;
          padding-top: 0;
          margin-top: 0;
          min-height: 180vh;
        }
        .pb-20 {
          padding-bottom: 5rem;
        }
        .desktop-container {
          position: relative;
          top: 0;
          left: 0;
          right: 0;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="overflow-hidden dark:bg-[#0b0b0f] w-full">
      {/* Mobile-specific container */}
      <div className="md:hidden tablet:hidden flex flex-col items-center justify-center py-10">
        <MacbookScroll 
          className="scale-[0.85] min-h-[100vh] mobile-view"
        />
      </div>

      {/* Tablet-specific container */}
      <div className="hidden tablet:flex tablet:flex-col tablet:justify-center tablet:items-center tablet:py-10">
        <MacbookScroll 
          className="tablet:py-0 tablet:min-h-[120vh]"
        />
      </div>

      {/* Desktop-specific container */}
      <div className="hidden md:block tablet:hidden justify-center items-start pt-0 mt-0 pb-20 desktop-container">
        <MacbookScroll 
          className="desktop-centered pt-0 mt-0 min-h-[180vh]"
        />
      </div>
    </div>
  );
};

export default PcAnimation;
