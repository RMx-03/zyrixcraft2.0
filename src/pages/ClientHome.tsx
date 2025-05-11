import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/ZyrixcraftLogo.webp";
import { FiX, FiLinkedin, FiSend } from "react-icons/fi";
import { FaInstagram, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import '../style/BecomeClient.css'

type ClientHomeProps = {
  setOverlay: (value: boolean) => void;
};

const ClientHome: React.FC<ClientHomeProps> = ({ setOverlay }) => {
  const [state, handleSubmit] = useForm("xblgzgjv");
  
  // Set overlay to true when component mounts
  useEffect(() => {
    // Ensure overlay is set to true when the component mounts
    setTimeout(() => {
      setOverlay(true);
    }, 100);
    
    // Clean up function to ensure overlay is set to false when component unmounts
    return () => setOverlay(false);
  }, [setOverlay]);
  
  // Show success or error toast based on form submission result
  React.useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully! 🎉");
    } else if (state.errors) {
      toast.error("Something went wrong! Please try again. ❌");
    }
  }, [state.succeeded, state.errors]);
  
  // Function to handle close button click
  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Explicitly set overlay to false
    setOverlay(false);
    
    // Navigate back to homepage after a short delay
    setTimeout(() => {
      window.history.back();
    }, 100);
  };
  
  return (
    <div className="fixed z-101 inset-0 w-full h-screen flex flex-col md:flex-row items-stretch justify-center shadow-lg overflow-hidden">
      {/* Left Section - Hidden on mobile */}
      <div
        id="left"
        className="hidden md:flex w-1/2 md:w-1/2 h-full md:h-screen bg-[#000000e3] text-white flex-col gap-2 justify-center items-center p-8 md:p-0"
      >
        {/* Logo and Brand Section - Specific tablet adjustments for 820x1180, 912x1368, 1024x1366 */}
        <div className="w-[70%] relative h-[400px] flex flex-col items-center justify-center mx-auto
                       min-[768px]:max-[820px]:h-[350px]
                       min-[821px]:max-[912px]:h-[370px]
                       min-[913px]:max-[1024px]:h-[380px]
                       min-[1025px]:max-[1366px]:h-[400px]">
          
          {/* === TABLET LAYOUT === */}
          <div className="hidden min-[768px]:max-[1366px]:block w-full">
            {/* Centered div for logo + text */}
            <div className="flex flex-row justify-center items-center w-full">
              {/* Combined logo & text container */}
              <div className="flex flex-row items-center">
                {/* Z logo */}
                <div>
                  <img
                    src={logo}
                    alt="Logo"
                    className="min-[768px]:max-[820px]:w-[120px] min-[768px]:max-[820px]:h-[120px] 
                             min-[821px]:max-[912px]:w-[130px] min-[821px]:max-[912px]:h-[130px]
                             min-[913px]:max-[1024px]:w-[140px] min-[913px]:max-[1024px]:h-[140px]
                             min-[1025px]:max-[1366px]:w-[150px] min-[1025px]:max-[1366px]:h-[150px]"
                  />
                </div>
                {/* yrixCraft text */}
                <div className="min-[768px]:max-[820px]:translate-x-[-48px]
                              min-[821px]:max-[912px]:translate-x-[-52px] 
                              min-[913px]:max-[1024px]:translate-x-[-56px]
                              min-[1025px]:max-[1366px]:translate-x-[-60px]">
                  <span className="font-bold font-sans
                               min-[768px]:max-[820px]:text-[88px]
                               min-[821px]:max-[912px]:text-[94px]
                               min-[913px]:max-[1024px]:text-[100px]
                               min-[1025px]:max-[1366px]:text-[108px]">
                    yrixCraft
                  </span>
                </div>
              </div>
            </div>
            
            {/* Descriptive text - separate container */}
            <div className="w-full text-center mt-24
                         min-[768px]:max-[820px]:mt-20
                         min-[821px]:max-[912px]:mt-22
                         min-[913px]:max-[1024px]:mt-24
                         min-[1025px]:max-[1366px]:mt-28">
              <span className="font-sans
                           min-[768px]:max-[820px]:text-base
                           min-[821px]:max-[912px]:text-lg
                           min-[913px]:max-[1024px]:text-lg
                           min-[1025px]:max-[1366px]:text-xl">
                Your one-stop solution for all your digital needs—web, UI/UX, graphics, and more!
              </span>
            </div>
          </div>

          {/* Original layout for desktop - hidden on tablets */}
          <div className="flex flex-col w-full min-[768px]:max-[1366px]:hidden">
            <div className="flex justify-start w-full">
              <img
                src={logo}
                alt="Logo"
                className="w-[180px] h-[180px] md:w-[280px] md:h-[300px]"
              />
            </div>
            
            <span className="absolute bottom-32 right-5 text-[40px] md:text-[65px] font-bold font-sans">
              yrixCraft
            </span>
            
            <span className="absolute bottom-10 text-lg md:text-2xl font-sans text-center w-full">
              Your one-stop solution for all your digital needs—web, UI/UX, graphics, and more!
            </span>
          </div>
        </div>
        
        {/* Contact & Social Links - Adjusted spacing for tablets */}
        <div className="w-[90%] md:w-[70%] h-auto md:h-[200px] flex flex-col md:flex-row items-start justify-center mt-8
                       min-[768px]:max-[820px]:mt-4 min-[768px]:max-[820px]:pt-2
                       min-[821px]:max-[912px]:mt-4 min-[821px]:max-[912px]:pt-3
                       min-[913px]:max-[1024px]:mt-5 min-[913px]:max-[1024px]:pt-3
                       min-[1025px]:max-[1366px]:mt-6 min-[1025px]:max-[1366px]:pt-4">
          <div className="text-[18px] md:text-[20px] flex flex-col items-center md:items-start">
            <p className="font-semibold mb-2">Contact Us</p>
            <div className="flex flex-col md:mt-2">
              <span>Phone:</span>
              <p className="hover:scale-[1.1] hover:cursor-pointer">+91 9711625392</p>
              <span>Email:</span>
              <p
                className="hover:scale-[1.1] hover:cursor-pointer"
                onClick={() => (window.location.href = "mailto:zyrixcraft@gmail.com")}
              >
                zyrixcraft@gmail.com
              </p>
            </div>
          </div>
          <div className="hidden md:block w-[2px] ml-5 h-[170px] bg-white rounded-3xl"></div>
          <div className="ml-0 md:ml-5 flex flex-col gap-2 text-[18px] md:text-[20px] w-full md:w-[120px] justify-start items-center md:items-start">
            <p className="font-semibold mb-2">Follow Us</p>
            <div className="flex flex-col md:mt-2">
              <div
                onClick={() => window.open("https://www.instagram.com/zyrixcraft?igsh=dWE0d2Vwbmx4NjBm", "_blank")}
                className="flex gap-2 w-full justify-start items-center hover:scale-[1.1] hover:cursor-pointer"
              >
                <FaInstagram />
                <span>Instagram</span>
              </div>
              <div
                onClick={() => window.open("https://x.com/zyrixcraft", "_blank")}
                className="flex gap-2 w-full justify-start items-center hover:scale-[1.1] hover:cursor-pointer"
              >
                <FaXTwitter />
                <span>Twitter</span>
              </div>
              <div
                onClick={() => window.open("https://www.linkedin.com/company/zyrixcraft/posts/?feedView=all", "_blank")}
                className="flex gap-2 w-full justify-start items-center hover:scale-[1.1] hover:cursor-pointer"
              >
                <FiLinkedin />
                <span>LinkedIn</span>
              </div>
              <div
                onClick={() => window.open("https://wa.me/919711625392", "_blank")}
                className="flex gap-2 w-full justify-start items-center hover:scale-[1.1] hover:cursor-pointer"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Section (Form) - Full width on mobile */}
      <div id="right" className="w-full md:w-1/2 h-full md:h-screen font-serif bg-[#160f0f] text-white p-6 md:p-8 flex flex-col justify-start relative overflow-y-auto">
        <div className="relative w-full max-w-2xl mx-auto flex flex-col" id="right-container">
          {/* Close Button - Enhanced for better visibility and interaction */}
          <button
            id="close-btn"
            onClick={handleClose}
            aria-label="Close form"
            className="absolute right-3 top-3 z-20 p-2 cursor-pointer text-white hover:text-orange-600 transition-colors duration-300 hover:scale-110 bg-[#4c3c3c] rounded-full flex items-center justify-center w-10 h-10"
          >
            <FiX size={24} />
          </button>
          {/* Title Section - simplified version */}
          <div className="flex flex-col items-start w-full mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-left mb-3" id="contact-heading">
              Let's get in touch
            </h2>
            <p id="contact-subtext" className="block text-[16px] md:text-[17px] text-left">
              Excited to bring your vision to life! Let's create<br />
              something amazing together.<br />
              Call us for any inquiry.
            </p>
          </div>
          
          {/* Form Section layout */}
          <form onSubmit={handleSubmit} id="contact-form" className="flex flex-col w-full">
            <div className="w-full mb-5">
              <label htmlFor="email" className="block text-lg mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email-input"
                placeholder="ansh@gmail.com"
                className="w-full bg-[#4c3c3c80] p-4 border-none rounded-2xl text-white placeholder:text-gray-300"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="mt-1 text-sm text-red-600"
              />
            </div>
            
            <div className="w-full mb-5">
              <label htmlFor="name" className="block text-lg mb-2">
                Name & Company
              </label>
              <input
                type="text"
                name="name"
                id="name-input"
                placeholder="Ansh from zyrixcraft"
                className="w-full bg-[#4c3c3c80] p-4 border-none rounded-2xl text-white placeholder:text-gray-300"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="mt-1 text-sm text-red-600"
              />
            </div>
            
            <div className="w-full mb-6">
              <label htmlFor="message" className="block text-lg mb-2">
                Tell us more about your project
              </label>
              <textarea
                name="message"
                id="message-textarea"
                placeholder="Something about your great idea"
                className="w-full h-[150px] md:h-[180px] bg-[#4c3c3c80] border-none rounded-2xl p-4 resize-none text-white placeholder:text-gray-300"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="mt-1 text-sm text-red-600"
              />
            </div>
            
            <button
              id="submit-btn"
              type="submit"
              disabled={state.submitting}
              className="w-full text-[16px] md:text-[18px] flex gap-2 justify-center items-center h-[55px] rounded-full bg-[#4c3c3c] text-white font-semibold transition-all duration-300 ease-in-out hover:bg-orange-600 hover:shadow-lg hover:scale-[1.02] hover:cursor-pointer"
            >
              {state.submitting ? "Sending..." : "Send Message"} 
              <FiSend className="text-xl" />
            </button>
          </form>
        </div>
      </div>
      {/* Toast Notification */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ClientHome;