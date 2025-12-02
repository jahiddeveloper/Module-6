import React, { useState } from "react";
import userImg from "../../assets/user.png";
import vactor from "../../assets/Vector.png";

const Player = ({ player, setAvailableBalance, availableBalance }) => {
  let [isSelected, setIsSelected] = useState(false);

  let handleSelected = (playerData) => {
    if (availableBalance < playerData.price) {
      alert("Please update your balance !");
      return;
    }
    setIsSelected(true);
    setAvailableBalance(availableBalance - playerData.price);
  };

  return (
    <div className="font">
      <div className="card bg-base-100 w-96 shadow-lg p-2">
        <figure>
          <img
            className="rounded-2xl h-50 w-full object-cover"
            src={player.image}
            alt="Shoes"
          />
        </figure>
        <div className="mt-6">
          <div className="flex items-center">
            <img className="h-6 w-6" src={userImg} alt="" />
            <h2 className="ml-3 text-xl font-bold">{player.name}</h2>
          </div>
          <div className="flex justify-between items-center border-b-1 border-gray-200 pb-5">
            <div className="flex items-center">
              <img src={vactor} alt="" />
              <p className="ml-3">{player.country}</p>
            </div>
            <div className="">
              <h4 className="px-6 py-3 bg-gray-100 font-semibold rounded-lg">
                All Rounded
              </h4>
            </div>
          </div>
          <h3 className="mt-4 font-bold">Rating : {player.rating}</h3>
          <div className="flex justify-between items-center mt-2">
            <h3 className="font-bold">Bathand : {player.batHand}</h3>
            <h3 className="text-gray-500">Ballhand : {player.ballHand}</h3>
          </div>
          <div className="flex justify-between items-center mt-4">
            <h3 className="font-bold">
              price : $<span>{player.price}</span>
            </h3>
            <button
              disabled={isSelected}
              onClick={() => {
                handleSelected(player);
              }}
              className="btn"
            >
              {isSelected === true ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
