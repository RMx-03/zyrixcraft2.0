import "../App.css";
import Paragraph from "../components/Paragraph"; 

interface Card {
  title: string;
  description: string;
}

const cardData: Card[] = [
  {
    title: "Web Projects.",
    description:
      "We craft responsive, high-performance websites that align with your brand and deliver seamless user experiences across all devices.",
  },
  {
    title: "Graphic Design.",
    description:
      "From logos to full branding kits, we create visually compelling designs that communicate your message and capture your audience's attention.",
  },
  {
    title: "UX/UI Design.",
    description:
      "Our user-centric approach ensures intuitive, engaging interfaces that enhance usability and turn users into loyal customers.",
  },
];

const Service: React.FC = () => {
  const text = "Design, develop, deliver — we do it all beautifully.";

  return (
    <div
      id="Service"
      className="w-full bg-black text-white px-5 sm:px-8 md:px-12 lg:px-20 xl:px-40 py-8 sm:py-12 md:py-15 flex flex-col"
    >
      {/* SERVICE Heading */}
      <div className="flex whitespace-nowrap gap-3 sm:flex-row items-center mb-8 sm:mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-0 sm:mr-6">
          OUR <span className="text-orange-600">SERVICE</span>
        </h1>
        <hr className="w-full sm:w-auto sm:flex-grow border-t border-orange-600 " />
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 p-4 sm:p-5 relative">
        {cardData.map((card, index) => (
          <div key={index} className="w-full md:w-1/3">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">{card.title}</h2>
            <p className="text-xl font-serif leading-relaxed mb-4 sm:mb-6 text-gray-300">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Animated Text */}
      <div className="mt-8 ml-3 sm:mt-10 md:mt-14 mb-8 sm:mb-10 md:mb-14">
        <Paragraph text={text} />
      </div>
    </div>
  );
};

export default Service;
