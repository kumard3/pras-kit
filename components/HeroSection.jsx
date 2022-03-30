import GradientButtonOne from "./Buttons/GradientButtonOne";
import GradientButtonTwo from "./Buttons/GradientButtonTwo";
import ExploreButton from "./Buttons/ExploreButton";
import HeroTagLine from "./HeroTagLine";
import Sally from "./Sally";

const HeroSection = () => {
  return (
    <div className="z-40 flex justify-center items-center w-screen">
      <div className="lg:w-1/2 lg:pl-10 py-10 lg:mt-40 flex flex-col justify-center items-start h-full w-2/3">
        <HeroTagLine />
        <div className="flex w-full space-x-4 lg:hidden">
          <GradientButtonOne />
          <GradientButtonTwo />
        </div>
        <div className="flex hidden lg:block">
          <ExploreButton/>
        </div>
      </div>
      <div className="lg:w-1/2 hidden lg:block">
        <Sally />
      </div>
    </div>
  );
};

export default HeroSection;
