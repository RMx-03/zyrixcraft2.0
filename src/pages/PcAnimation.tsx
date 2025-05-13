import React, { useEffect } from 'react';
import { MobileMacbookScroll, TabletMacbookScroll, DesktopMacbookScroll } from '../components/MacbookScroll';

const PcAnimation: React.FC = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      /* Tablet styles - now specifically excluding iPad Pro */
      @media (min-width: 768px) and (max-width: 1023px) {
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
      
      /* iPad Pro specific styles */
      @media (min-width: 1024px) and (max-width: 1366px) {
        .ipad-pro\\:flex { display: flex; }
        .ipad-pro\\:block { display: block; }
        .ipad-pro\\:hidden { display: none; }
        .ipad-pro\\:min-h-\\[120vh\\] { min-height: 120vh; }
        .ipad-pro\\:scale-75 { transform: scale(0.75); }
        .ipad-pro\\:py-10 { padding-top: 2.5rem; padding-bottom: 2.5rem; }
      }
      
      /* Mobile-specific styles */
      @media (max-width: 767px) {
        .scale-\\[0\\.85\\] { transform: scale(0.85); }
        .min-h-\\[90vh\\] { min-height: 90vh; }
        .py-10 { padding-top: 2.5rem; padding-bottom: 2.5rem; }
        .mobile-view { margin-bottom: -30vh; }
      }
      
      /* Desktop-specific styles */
      @media (min-width: 1370px) {
        .desktop-centered {
          margin: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          padding-top: 0;
          margin-top: 0;
          min-height: 200vh;
          padding-bottom: 30vh;
        }
        .pb-20 {
          padding-bottom: 5rem;
        }
        .desktop-container {
          position: relative;
          top: 0;
          left: 0;
          right: 0;
          overflow-y: visible;
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
      {/* Mobile view - screens smaller than 768px */}
      <div className="block md:hidden">
        <MobileMacbookScroll className="scale-[0.85] min-h-[100vh] mobile-view" />
      </div>

      {/* Standard Tablet view - 768px to 1023px */}
      <div className="hidden md:block lg:hidden xl:hidden">
        <TabletMacbookScroll className="py-0 min-h-[120vh]" />
      </div>

      {/* iPad Pro view - 1024px to 1366px */}
      <div className="hidden lg:block xl:hidden">
        <TabletMacbookScroll className="py-0 min-h-[120vh]" />
      </div>

      {/* Desktop view - 1370px and above */}
      <div className="hidden xl:block overflow-visible pt-4 mt-4">
        <DesktopMacbookScroll className="desktop-centered pt-0 mt-0 min-h-[200vh] pb-[30vh]" />
      </div>
    </div>
  );
};

export default PcAnimation;
