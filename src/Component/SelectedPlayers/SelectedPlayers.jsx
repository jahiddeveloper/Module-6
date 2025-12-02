import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({ buyPlayers, removePlayer, toggole, setToggole }) => {
  return (
    <div className="font max-w-[1200px] mx-auto mt-8">
      {buyPlayers.map((player) => (
        <SelectedCard
          removePlayer={removePlayer}
          player={player}
        ></SelectedCard>
      ))}
      <button
        onClick={() => setToggole(true)}
        className={`mt-12 px-8 py-4 border-1 border-gray-400 rounded-xl font-bold cursor-pointer ${
          toggole === true ? "bg-[#e7fe29]" : "bg-[#e7fe29]"
        } hover:bg-black hover:text-white hover:transition duration-400`}
      >
        add more player
      </button>
    </div>
  );
};

export default SelectedPlayers;
