const HeroTagLine = () => {
  return (
    <div className="h-full max-w-3xl mt-10 lg:mt-0">
      <h2 className="text-5xl md:text-7xl text-white font-semibold font-spartan text-left selectionBackground">
        The React{" "}
        <span className="gradientText font-orbitron font-bold selection:bg-transparent">
          Developer Kit
        </span>{" "}
        you always wanted
      </h2>
      <p className="text-gray-300 text-md font-spartan py-4">
        Pras-Kit is a collection of React Components, Templates, and more.
        Enabling you to build your design system and develop Next and React
        applications and websites faster.
      </p>
    </div>
  );
};

export default HeroTagLine;
