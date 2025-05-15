import { useEffect, useRef } from 'react';
import './NavBar.css';

type NavBarProps = {
    setIsOpen: (isOpen: boolean) => void;   
};

const NavBar: React.FC<NavBarProps> = ({ setIsOpen }) => {
    const navRef = useRef<HTMLDivElement>(null);

    // Function to handle link clicks 
    const handleClick = (elementId: string) => {
        // Close the navbar first
        setIsOpen(false);
        
        // Small delay 
        setTimeout(() => {
            // Find the element to scroll to
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        const handleScroll = () => {
            setIsOpen(false);
        };

        document.addEventListener('mousedown', handleOutsideClick);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setIsOpen]);

    return (
        <div ref={navRef} className="navbar-container fixed z-100 top-23 right-6 min-w-[50px] flex flex-col justify-between items-end gap-5 text-white font-mono text-xl font-normal">
            <div className="pseudo-text-effect cursor-pointer" data-after="Home" onClick={() => handleClick('Home')}>
                <span>Home</span>
            </div>
            <div className="pseudo-text-effect cursor-pointer" data-after="Services" onClick={() => handleClick('Service')}>
                <span>Services</span>
            </div>
            <div className="pseudo-text-effect cursor-pointer" data-after="Portfolio" onClick={() => handleClick('Portfolio')}>
                <span>Portfolio</span>
            </div>
            <div className="pseudo-text-effect cursor-pointer" data-after="Contact Us" onClick={() => handleClick('Footer')}>
                <span>Contact Us</span>
            </div>
        </div>
    );
};

export default NavBar;
