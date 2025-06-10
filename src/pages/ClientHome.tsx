import  { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/ZyrixcraftLogo.webp";
import { FiX,FiLinkedin,FiSend  } from "react-icons/fi";
import {FaInstagram , FaXTwitter ,FaWhatsapp   } from "react-icons/fa6";
import { HiArrowLongDown } from "react-icons/hi2";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import '../style/BecomeClient.css'
import '../style/PhoneInput.css'
import { useNavigate } from "react-router-dom";

const ClientHome = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    topic: '',
    message: ''
  });
  const [state, setState] = useState({
    submitting: false,
    error: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (value: string | undefined) => {
    setFormData(prev => ({
      ...prev,
      mobile: value || ''
    }));
  };

  const validateForm = () => {
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.mobile.trim() !== '' &&
      formData.topic.trim() !== '' &&
      formData.message.trim() !== ''
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill all fields');
      return;
    }

    setState(prev => ({ ...prev, submitting: true }));
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.mobile); // This will include the full international number
      formDataToSend.append('topic', formData.topic);
      formDataToSend.append('message', formData.message);
      
      const response = await fetch('https://formspree.io/f/mrbkpzaa', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          topic: '',
          message: ''
        });
        navigate("/thanks");
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message');
      console.error('Error:', error);
    } finally {
      setState(prev => ({ ...prev, submitting: false }));
    }
  };

  const handleClose = () => {
    navigate("/");
  }
  return (
    <div className="fixed z-101 inset-0 w-full h-screen flex items-center justify-center shadow-lg overflow-hidden">
      {/* Left Section */}
      <div
        id="left"
        className="w-1/2 h-screen bg-[#000000e3] text-white flex flex-col gap-2 justify-center items-center"
      >
        <div className="w-[70%] relative h-[400px] flex">
          <img
            src={logo}
            alt="Logo"
            // loading="lazy"
            className="w-[280px] h-[300px]"
          />
          <span className=" absolute bottom-32 right-5 text-[65px] font-bold font-sans ">
            yrixCraft
          </span>
          <span className="absolute bottom-10 text-2xl font-sans ">
            Your one-stop solution for all your digital needs—web, UI/UX,
            graphics, and more!
          </span>
        </div>

        {/* Contact & Social Links */}
        <div className="w-[70%] h-[200px] gap-2 flex">
          <div className="text-[20px]">
            <p>Contact Us</p>
            <span>Phone:</span>
            <p className="hover:scale-[1.1] hover:cursor-pointer">
              +91 9717102529
            </p>
            <span>Email:</span>
            <p
              className="hover:scale-[1.1] hover:cursor-pointer"
              onClick={() =>
                (window.location.href = "mailto:zyrixcraft@gmail.com")
              }
            >
              zyrixcraft@gmail.com
            </p>
          </div>

          <div className="w-[2px] ml-5 h-[170px] bg-black rounded-3xl"></div>

          <div className="ml-5 flex flex-col gap-2 text-[20px] w-[120px] justify-start items-center">
            <p>Follow Us</p>

            <div
              onClick={() =>
                window.open(
                  "https://www.instagram.com/zyrixcraft?igsh=dWE0d2Vwbmx4NjBm",
                  "_blank"
                )
              }
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
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/zyrixcraft/",
                  "_blank"
                )
              }
              className="flex gap-2 w-full justify-start items-center hover:scale-[1.1] hover:cursor-pointer"
            >
              <FiLinkedin />
              <span>LinkedIn</span>
            </div>

            <div
              onClick={() =>
                window.open("https://wa.me/919717102529", "_blank")
              }
              className="flex gap-2 w-full justify-start items-center hover:scale-[1.1] hover:cursor-pointer"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Form) */}
      <div id="right" className="w-1/2 h-screen font-serif bg-[#000] text-white overflow-y-auto">
        <div className="relative px-8 py-6" id="right-container">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 w-12 h-12 flex justify-center items-center rounded-full bg-gray-800/50 hover:bg-orange-600 hover:scale-110 transition-all duration-300 ease-in-out z-10 border border-gray-600 hover:border-orange-600"
            aria-label="Close form"
          >
            <FiX className="text-2xl text-white" />
          </button>

          <h2 className="text-5xl mb-6" id="contact-heading">
            Let's get in touch
          </h2>
          
          {/* Arrow and Text Side by Side */}
          <div className="flex items-center gap-6 mb-8">
            <HiArrowLongDown className="text-orange-600 text-[6em] flex-shrink-0" />
            <div className="flex-1">
              <p className="text-lg text-gray-300 leading-relaxed">
                Excited to bring your vision to life! Let's create something amazing together.
              </p>
              <p className="text-orange-400 mt-2 font-medium">
                Call us for any inquiry.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} action="https://formspree.io/f/mrbkpzaa" method="POST" id="contact-form" className="space-y-6">
            <div className="w-full" id="form-wrapper">
              {/* Name, Email, Mobile Inputs */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" id="input-wrapper">
                
                {/* Name Input */}
                <div className="w-full" id="name-input-box">
                  <label htmlFor="name" className="text-xl block mb-2 text-white">Name *</label>
                  <input
                    type="text"
                    name="name"
                    id="name-input"
                    placeholder="Ansh from zyrixcraft"
                    className="w-full bg-[#b8a4a45d] p-4 border-none rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                {/* Email Input */}
                <div className="w-full" id="email-input-box">
                  <label htmlFor="email" className="text-xl block mb-2 text-white">Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    id="email-input"
                    placeholder="ansh@gmail.com"
                    className="w-full bg-[#b8a4a45d] p-4 border-none rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Mobile Number Input */}
              <div className="w-full mb-6" id="mobile-input-box">
                <label htmlFor="mobile" className="text-xl block mb-2 text-white">
                  Mobile Number *
                </label>
                <div className="phone-input-container">
                  <PhoneInput
                    name="mobile"
                    placeholder="Enter phone number"
                    value={formData.mobile}
                    onChange={handlePhoneChange}
                    defaultCountry="IN"
                    international
                    countryCallingCodeEditable={false}
                    className="w-full"
                    style={{
                      '--PhoneInputCountryFlag-height': '1em',
                      '--PhoneInputCountrySelectArrow-color': '#ffffff',
                      '--PhoneInput-color--focus': '#fb923c',
                    } as React.CSSProperties}
                  />
                </div>
              </div>

              {/* Project Type Dropdown */}
              <div className="w-full mb-6" id="topic-wrapper">
                <label htmlFor="topic" className="text-xl block mb-2 text-white">
                  What is your project about? *
                </label>
                <select
                  name="topic"
                  id="topic-input"
                  className="w-full bg-[#b8a4a45d] text-white p-4 border-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                  value={formData.topic}
                  onChange={handleChange}
                  required
                > 
                  <option value="" disabled className="text-gray-400">
                    -- Select a Topic --
                  </option>
                  <option value="ui-ux" className="text-black">
                    UI/UX Design: Improve user experience
                  </option>
                  <option value="web-dev" className="text-black">
                    Website Development: Build or update a website
                  </option>
                  <option value="graphic-design" className="text-black">
                    Graphic Design: Logo, brochure, social media posts
                  </option>
                  <option value="consultation" className="text-black">
                    Not Sure / Need Consultation
                  </option>
                </select>
              </div>

              {/* Message TextArea */}
              <div className="w-full mb-6" id="message-wrapper">
                <label htmlFor="message" className="text-xl block mb-2 text-white">
                  Tell us more about your project *
                </label>
                <textarea
                  name="message"
                  id="message-textarea"
                  placeholder="Describe your project goals, requirements, timeline, and any specific details that would help us understand your vision..."
                  className="w-full h-[200px] border-none bg-[#b8a4a45d] rounded-2xl p-4 text-white placeholder-gray-400 text-left resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="w-full flex justify-center" id="submit-wrapper">
                <button
                  id="submit-btn"
                  type="submit"
                  disabled={state.submitting}
                  className="w-full max-w-[300px] text-[18px] flex gap-2 justify-center items-center h-[60px] rounded-full bg-white text-orange-600 font-bold transition-all duration-500 ease-in-out hover:bg-orange-600 hover:text-white hover:shadow-lg hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                  <FiSend className="text-2xl" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ClientHome;
