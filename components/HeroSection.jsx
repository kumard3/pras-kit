import GradientButtonOne from "./Buttons/GradientButtonOne";
import GradientButtonTwo from "./Buttons/GradientButtonTwo";
import ExploreButton from "./Buttons/ExploreButton";
import HeroTagLine from "./HeroTagLine";
import Sally from "./Sally";

const HeroSection = () => {
  return (
    <div className="z-40 flex  justify-between  relative min-h-screen">
      <div className=" lg:pl-10 py-10 lg:mt-40 flex flex-col justify-center items-start h-full px-4">
        <HeroTagLine />
        <div className="flex w-full space-x-4 lg:hidden">
          <GradientButtonOne />
          <GradientButtonTwo />
        </div>
        <div className="hidden lg:block">
          <ExploreButton />
        </div>
      </div>
      <div className=" hidden lg:block  ">
        <Sally />
      </div>
    </div>
  );
};

export default HeroSection;
