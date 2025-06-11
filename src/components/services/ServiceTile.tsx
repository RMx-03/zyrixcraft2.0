import { motion } from 'framer-motion';
import { FC, useState, useEffect, useCallback, useRef } from 'react';
import './ServiceStyles.css';

interface ServiceTileProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  index: number;
}

// service tile 
const ServiceTile: FC<ServiceTileProps> = ({ 
  title, 
  description, 
  imageUrl, 
  link,
  index 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const tileRef = useRef<HTMLDivElement>(null);
  
  // Check if it's a touch device on mount
  useEffect(() => {
    const checkTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    setIsTouchDevice(checkTouch);
  }, []);
  
  // Image slideshows 
  const imageSlideshows = {
    0: [ // Web Projects
      "assets/portfolio/1.jpg",
      "assets/portfolio/2.jpg",
      "assets/portfolio/3.jpg",
    ],
    1: [ // Graphic Design
      "assets/portfolio/4.png",
      "assets/portfolio/5.png",
      "assets/portfolio/6.png",
    ],
    2: [ // UX/UI Design
      "assets/portfolio/8.jpg",
      "assets/portfolio/7.png",
      "assets/portfolio/9.jpg",
    ],
    3: [ // Smart Solutions 
      "assets/portfolio/10.jpg",
      "assets/portfolio/11.jpg",
      "assets/portfolio/12.jpg",
    ],
  };
  
  const slideshow = imageSlideshows[index as keyof typeof imageSlideshows] || [imageUrl];
  
  // image rotation on hover/expand
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isHovered || isExpanded) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === slideshow.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, isExpanded, slideshow.length]);

  // Handle description visibility with delay after expansion
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
  
    if (isHovered && isExpanded) {
      // Show immediately when both are true
      setShowDescription(true);
    } else if (isHovered || isExpanded) {
      // Delay showing when only one is true
      timer = setTimeout(() => {
        setShowDescription(true);
      }, 100);
    } else {
      // Hide immediately when neither is true
      setShowDescription(false);
    }
  
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isHovered, isExpanded]);

  // expanded tile into view
  useEffect(() => {
    if (isExpanded && tileRef.current) {
      // Delay to let animations start
      setTimeout(() => {
        tileRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }, [isExpanded]);

  // tile click for mobile/tablet
  const handleTileClick = useCallback(() => {
    if (isTouchDevice) {
      setIsExpanded(!isExpanded);
      if (!isExpanded) {
        setCurrentImageIndex(0);
      }
    }
  }, [isExpanded, isTouchDevice]);
  
  // back button 
  const handleBackClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(false);
  }, []);
  
  // navigation to project page
  const handleNavigate = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = link;
  }, [link]);
  
  return (
    <div 
      ref={tileRef}
      className={`service-tile-container ${isHovered ? 'hovered' : ''} ${isExpanded ? 'expanded-container' : ''}`}
      onMouseEnter={() => {
        if (!isTouchDevice) {
          setIsHovered(true);
        }
      }}
      onMouseLeave={() => {
        if (!isTouchDevice) {
          setIsHovered(false);
          setCurrentImageIndex(0);
        }
      }}
      onClick={handleTileClick}
    >
      <motion.div 
        className={`service-tile ${isHovered || isExpanded ? 'expanded' : ''}`}
        
      >
        {/* Background slideshow */}
        <div className="service-tile-background">
          {slideshow.map((img, i) => (
            <div 
              key={i} 
              className={`service-tile-image ${currentImageIndex === i ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>
        
        {/* Content */}
        <div className="service-tile-content">
          <h3 className="service-tile-title">{title}</h3>
          
          <div className={`service-tile-description ${showDescription ? 'fade-in-visible' : ''}`}>
            <p>{description}</p>
            
            {/* View Projects text link (for desktop/tablet) */}
            <a 
              href={link}
              className="service-tile-link"
              onClick={(e) => e.stopPropagation()}
            >
              View Projects
              <svg className="service-tile-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile back button */}
        {isExpanded && (
          <button
            className="mobile-back-button"
            onClick={handleBackClick}
            onTouchStart={(e) => {              
              e.stopPropagation();
            }}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
          </button>
        )}
        
        {/* Forward navigation button (for mobile) */}
        {isExpanded && (
          <button
            className="forward-button"
            onClick={handleNavigate}
            onTouchStart={(e) => {
              e.stopPropagation();
            }}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default ServiceTile;