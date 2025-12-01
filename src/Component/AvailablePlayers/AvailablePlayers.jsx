import React, { use } from "react";
import userImg from "../../assets/user.png"
import vactor from "../../assets/Vector.png"

const AvailablePlayers = ({ fetchPlayers }) => {
  let playersData = use(fetchPlayers);
  console.log(playersData);
  return (
    <div className="font max-w-[1200px] mx-auto mt-8">
      <div className="card bg-base-100 w-96 shadow-lg p-2">
        <figure>
          <img
          className="rounded-2xl h-50 w-full object-cover"
            src="https://i.ibb.co/SgS8ZV3/Virat.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="mt-6">
          <div className="flex items-center">
            <img className="h-6 w-6" src={userImg} alt="" />
            <h2 className="ml-3 text-xl font-bold">Virat Kholi</h2>
          </div>
          <div className="flex justify-between items-center border-b-1 border-gray-200 pb-5">
            <div className="flex items-center">
                <img src={vactor} alt="" />
                <p className="ml-3">Bangladesh</p>
            </div>
            <div className="">
                <h4 className="px-6 py-3 bg-gray-100 font-semibold rounded-lg">All Rounded</h4>
            </div>
          </div>
          <h3 className="mt-4 font-bold">Rating : 5.00</h3>
          <div className="flex justify-between items-center mt-2">
            <h3 className="font-bold">Left-Hand-Bat</h3>
            <h3 className="text-gray-500">Left-Hand-Bat</h3>
          </div>
          <div className="flex justify-between items-center mt-4">
            <h3 className="font-bold">price : $<span>100000</span></h3>
            <button className="btn">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayers;
