import React from "react";
import letucce from "@/assets/letucce.png";
import green from "@/assets/footerGreen.png";

type Props = {};

const Booking = (props: Props) => {
  return (
    <section id="Booking" className="flex h-full w-full  bg-dark-cream">
      <img
        src={letucce}
        alt="letucce"
        className="absolute left-[-15rem] mt-36 h-96 md:left-[-17rem]"
      />
      <img
        src={green}
        alt="green"
        className="absolute right-[-3rem] mt-80 h-72 overflow-hidden md:right-0"
      />
      <div className="flex h-80 w-5/6 self-center bg-white md:h-96"></div>
    </section>
  );
};

export default Booking;
