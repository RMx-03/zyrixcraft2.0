import { FaCode, FaPaintBrush, FaLaptopCode, FaRobot } from 'react-icons/fa';
import '../App.css';
import '../components/services/ServiceStyles.css';

// import {
//   ServiceContainer,
//   ServiceHeading,
//   ServiceTile
// } from '../components';
import ServiceContainer from '../components/services/ServiceContainer';
import ServiceHeading from '../components/services/ServiceHeading';
import ServiceTile from '../components/services/ServiceTile';   
// Service data
const serviceData = [
  {
    title: "Web Projects",
    description: "We craft responsive, high-performance websites that align with your brand and deliver seamless user experiences across all devices. Our development approach ensures optimal performance and security.",
    icon: <FaCode />,
    link: "https://zyrixcraft-project-showcase.vercel.app/",
    imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    imageAlt: "Web Development",
  },
  {
    title: "Graphic Design",
    description: "From logos to full branding kits, we create visually compelling designs that communicate your message and capture your audience's attention. Our design philosophy blends creativity with strategic messaging.",
    icon: <FaPaintBrush />,
    link: "https://book-animation-psi.vercel.app/",
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    imageAlt: "Graphic Design",
  },
  {
    title: "UX/UI Design",
    description: "Our user-centric approach ensures intuitive, engaging interfaces that enhance usability and turn users into loyal customers. We focus on creating experiences that feel natural and delightful.",
    icon: <FaLaptopCode />,
    link: "https://ui-ux-ruddy.vercel.app/",
    imageUrl: "assets/portfolio/9.png",
    imageAlt: "UX/UI Design",
  },
  {
    title: "Smart Solutions",
    description: "We develop custom automation solutions that streamline your business processes, reduce manual workload, and increase efficiency. Our solutions are tailored to your specific needs and integrate seamlessly with your existing systems.",
    icon: <FaRobot />,
    link: "/automation",
    imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    imageAlt: "Automated Solutions",
  }
];


// Service page  
const Portfolio = () => {
  return (
    <div id='Portfolio'>
      <ServiceContainer>
        {/* Heading */}
        <div className="mb-20">
          <ServiceHeading title="OUR PORTFOLIO" />
        </div>
        
        {/* Services grid */}
        <div className="service-grid mb-20">
          {serviceData.map((service, index) => (
            <ServiceTile
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              link={service.link}
              index={index}
            />
          ))}
        </div>
      </ServiceContainer>      
    </div>
  );
};

export default Portfolio;