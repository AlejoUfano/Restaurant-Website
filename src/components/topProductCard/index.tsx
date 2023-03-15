import { MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {
  img: string;
  title: string;
  subtitle: string;
  location: string;
};

const TopProductCard = ({ img, title, subtitle, location }: Props) => {
  return (
    <div
      className={`flex h-[21rem] w-11/12 flex-col items-center justify-end rounded-lg ${img} bg-cover bg-center md:h-[35rem] md:w-[35rem]`}
    >
      <div className="z-20 flex w-full flex-col rounded-b-lg bg-main-red pb-3 opacity-60 md:pb-6">
        <div className="space-y-1 px-5 pt-4 md:space-y-4 md:px-10 md:pt-8">
          <h1 className="text-base font-bold text-white">{title}</h1>
          <p className="text-sm font-normal text-white">{subtitle}</p>
          <div className="flex items-center justify-start space-x-1">
            <MapPinIcon className="flex h-6 w-6 text-white" />
            <div className="flex text-sm font-normal text-white">
              {location}
            </div>
          </div>
        </div>
        <div className="flex items-center self-end rounded-l-full bg-white px-4 py-2 font-semibold text-main-red md:px-8 md:py-3">
          Book Now
        </div>
      </div>
    </div>
  );
};

export default TopProductCard;
