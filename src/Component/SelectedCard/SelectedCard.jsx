import React from "react";
import removeImg from "../../assets/remove.png"

const SelectedCard = ({player}) => {
  return (
    <div className="font">
      <div className="flex justify-between items-center border-1 border-gray-200 shadow-sm p-5 rounded-xl mt-3">
        <div className="flex items-center">
          <img
            className="h-18 w-18 object-cover rounded-xl"
            src={player.image}
            alt=""
          />
          <div className="ml-5">
            <h3 className="text-2xl font-bold">{player.name}</h3>
            <p className="text-gray-500 mt-2">Bat-hand : {player.batHand}</p>
          </div>
        </div>
        <div>
          <img
            className="cursor-pointer hover:scale-150 hover:transition duration-300"
            src={removeImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;
