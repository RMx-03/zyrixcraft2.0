import { useEffect, useRef } from 'react';
import './NavBar.css';

type NavBarProps = {
    setIsOpen: (isOpen: boolean) => void;   
};

const NavBar: React.FC<NavBarProps> = ({ setIsOpen }) => {
    const navRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        setIsOpen(false);
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
            <a href="#Home" className="pseudo-text-effect" data-after="Home" onClick={handleClick}>
                <span>Home</span>
            </a>
            <a href="#Service" className="pseudo-text-effect" data-after="Services" onClick={handleClick}>
                <span>Services</span>
            </a>
            <a href="#Portfolio" className="pseudo-text-effect" data-after="Portfolio" onClick={handleClick}>
                <span>Portfolio</span>
            </a>
            <a href="#Footer" className="pseudo-text-effect" data-after="Contact Us" onClick={handleClick}>
                <span>Contact Us</span>
            </a>
        </div>
    );
};

export default NavBar;
