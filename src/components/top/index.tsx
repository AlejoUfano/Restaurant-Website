import { TopFoodProducts } from "@/shared/types";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import TopProductCard from "../topProductCard";

type Props = {};
const topProducts: Array<TopFoodProducts> = [
  {
    img: "pizza-bg",
    title: "Fire Water",
    subtitle:
      "we are all about we are all about to the fullest and all content dining out or in!dining out or in!",
    location: "New Market",
  },
  {
    img: "burger-bg",
    title: "The Wonton ",
    subtitle:
      "we are all about we are all about to the fullest and all content dining out or in!dining out or in!",
    location: "Saheb Bazar",
  },
];

const Top = (props: Props) => {
  return (
    <section id="Top" className="flex h-fit w-full flex-col bg-cream">
      <div className="mt-28 flex w-5/6 flex-col items-center self-center py-4 md:mt-36 md:flex-row md:justify-between">
        <div className="mb-2 flex  h-full md:mb-0 md:w-2/5  md:space-x-8">
          <div className="h-fill mr-4 flex w-8 bg-main-red md:mr-0 md:w-12"></div>
          <h1 className="flex text-2xl font-semibold text-main-blue md:text-5xl">
            Some Top Restaurant For Dining In Or Take Away!
          </h1>
        </div>
        <p className="flex text-sm font-normal text-main-gray md:w-2/5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
          adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec
          vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id
          amet, nam hac magna accumsan. Nascetur ac tortor purus ultrices morbi
          tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
          adipiscing cursus auctor eget sed.
        </p>
      </div>
      {/* TOP FOODS CARDS */}
      <div className="flex flex-col items-center space-y-4 md:mt-16 md:flex-row md:space-y-0 md:space-x-10 md:pb-6">
        {topProducts.map((item, index) => (
          <TopProductCard
            img={item.img}
            title={item.title}
            subtitle={item.subtitle}
            location={item.location}
            key={index}
          />
        ))}
        <div className="flex flex-col items-center justify-center pb-5 md:pb-0">
          <ArrowRightCircleIcon className="flex h-10 w-10 text-main-red hover:cursor-pointer" />
          <div className="flex text-sm font-medium text-main-red">See More</div>
        </div>
      </div>
    </section>
  );
};

export default Top;
