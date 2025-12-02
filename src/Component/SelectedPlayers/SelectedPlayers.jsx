import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({buyPlayers}) => {

  return (
    <div className="font max-w-[1200px] mx-auto mt-8">
      
      {
        buyPlayers.map(player => <SelectedCard player={player}></SelectedCard>)
      }

    </div>
  );
};

export default SelectedPlayers;
