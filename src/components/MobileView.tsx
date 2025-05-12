export const MobileView: React.FC<Lid> = ({ scaleX, scaleY, rotate, translate, src }) => {
  return (
    <div className="relative flex justify-center items-center w-full max-w-[90vw]">
      <img
        src={require('../assets/MobileMockup.png')} // replace with your mobile mockup
        alt="Mobile"
        className="w-[300px] h-auto relative z-10"
      />
      <motion.div
        style={{
          scaleX,
          scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="absolute h-[500px] w-[280px] rounded-xl bg-black"
      >
        <img
          src={src}
          alt="mobile screen"
          className="h-full w-full object-cover rounded-xl"
        />
      </motion.div>
    </div>
  );
};
