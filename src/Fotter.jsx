import React from "react";
import footerImg from "./assets/logo-footer.png";

const Fotter = () => {
  return (
    <div className="font mt-15 md:mt-25 bg-black text-white py-15 md:py-25 pl-5 md:pl-0">
      <div className="max-w-[1200px] mx-auto">
        <img className="mx-auto block" src={footerImg} alt="" />
        <div className="grid grid-cols-1 md:grid-cols-3 mt-18">
          <div className="mt-5">
            <h3 className="text-xl font-bold">About Us</h3>
            <p className="text-gray-400 mt-4 w-60">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <div className="text-gray-400 mt-4 leading-7">
              <a href="">Home</a>
              <br />
              <a href="">Service</a>
              <br />
              <a href="">About</a>
              <br />
              <a href="">Contact</a>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-xl font-bold">Subscribe</h3>
            <p className="text-gray-400 w-70 mt-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex mt-5">
              <input
                className="w-60 md:w-80 py-3 bg-white text-black outline-none pl-5 text-lg rounded-l-xl border-r-0"
                type="email"
                placeholder="exaple@gmail.com"
              />
              <button className="px-6 py-3 bg-gray-500 cursor-pointer rounded-r-xl bg-gradient-to-r from-[#e05c51] to-[#fe9f30] font-bold border-l-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
