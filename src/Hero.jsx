import React from "react";
import heroImg from "./assets/banner-main.png";

const Hero = () => {
  return (
    <div
      className={`font max-w-[1200px] mx-auto mt-6 bg-[url('./assets/bg-shadow.png')] bg-cover bg-center bg-[#131313] py-12 rounded-3xl`}
    >
      <img className="mx-auto block" src={heroImg} alt="" />
      <h1 className="mt-6 text-4xl font-bold text-center text-white">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <h3 className="mt-4 text-xl text-gray-400 text-center">
        Beyond Boundaries Beyond Limits
      </h3>
      <button className="mt-6 font-bold mx-auto block cursor-pointer px-6 py-3 rounded-xl bg-[#E7FE29] hover:bg-[#f2fc99] hover:transition duration-300">
        Claim Free Credit
      </button>
    </div>
  );
};

export default Hero;
