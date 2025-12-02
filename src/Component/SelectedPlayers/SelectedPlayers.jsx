import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({ buyPlayers, removePlayer }) => {
  return (
    <div className="font max-w-[1200px] mx-auto mt-8">
      {buyPlayers.map((player) => (
        <SelectedCard removePlayer = {removePlayer} player={player}></SelectedCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
