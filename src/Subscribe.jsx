import React from "react";

const Subscribe = () => {
  return (
    <div className="font max-w-[1200px] mx-1 md:mx-auto mt-15 md:mt-25">
      <div className="bg-[url('./assets/bg-shadow.png')] bg-cover bg-center py-22 bg-white rounded-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Subscribe to our Newsletter
        </h1>
        <h4 className="text-lg md:text-xl font-semibold mt-4 text-center text-gray-500">
          Get the latest updates and news right in your inbox!
        </h4>
        <div className="flex justify-center items-center mt-6">
          <input
            className="w-60 md:w-80 py-3 border-1 border-gray-300 outline-none pl-5 text-lg rounded-xl"
            type="email"
            placeholder="exaple@gmail.com"
          />
          <button className="ml-2 px-6 py-3.5 bg-gray-500 cursor-pointer rounded-xl bg-gradient-to-r from-[#e05c51] to-[#fe9f30] font-bold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
