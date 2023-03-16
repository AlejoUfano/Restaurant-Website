import React from "react";
import foodPlate from "@/assets/plate.png";
import { MapPinIcon } from "@heroicons/react/24/solid";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {};

const Home = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section
      id="Home"
      className="bg-[conic-gradient(at center bottom, rgb(255, 255, 255), rgb(14, 165, 233), rgb(14, 165, 233))] flex h-fit w-full flex-col items-center from-[#ffedde_74%] via-[#ffedde_13%] to-[#fe043c_13%] md:justify-center md:pb-8"
    >
      <div className="mt-20 flex w-5/6 flex-col items-center md:mt-32 md:flex-row md:justify-start">
        {/* LEFT DIV */}

        <div className="flex w-full flex-col pt-8 md:w-3/5  md:pt-0 md:pb-36">
          {isAboveMediumScreens && (
            <h1 className="flex text-8xl font-black text-[#2E266F] opacity-5 md:h-64 md:text-[13rem]">
              Food
            </h1>
          )}
          <div className="pt-0 text-3xl font-bold text-main-blue md:text-7xl">
            Discover Restaurant & Delicious Food
          </div>
          <div className="flex w-full flex-row pt-5">
            <input
              className="flex flex-1 py-4 pl-4 text-xs md:flex-none md:py-3 md:px-10 md:text-lg"
              type="text"
              placeholder="Search Restaurant, Food"
            />
            <div className="flex justify-end bg-white p-1 md:w-36">
              <button className="rounded-tl-[2.5rem] bg-main-red py-1 px-6 text-xs font-semibold text-white md:py-3 md:px-12 md:text-lg">
                GO
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT DIV */}

        {isAboveMediumScreens && (
          <div className="flex">
            <img className="flex" src={foodPlate} alt="food-plate" />
          </div>
        )}
      </div>
      {!isAboveMediumScreens && (
        <div className="mt-6 flex items-center justify-center space-x-3 self-start rounded-r-full bg-main-red py-3 px-8">
          <MapPinIcon className="flex h-6 w-6 text-white" />
          <div className="flex text-white">Argentina</div>
        </div>
      )}
      {!isAboveMediumScreens && (
        <div className="flex w-5/6">
          <img className="flex" src={foodPlate} alt="food-plate" />
        </div>
      )}

      {/* LOCATION */}
      {isAboveMediumScreens && (
        <div className="flex items-center justify-center space-x-3 self-start rounded-r-full bg-main-red py-3 px-8">
          <MapPinIcon className="flex h-6 w-6 text-white" />
          <div className="flex text-white">Argentina</div>
        </div>
      )}
    </section>
  );
};

export default Home;
