import React, { use } from "react";
import Player from "../Player/Player";


const AvailablePlayers = ({ fetchPlayers }) => {
  let playersData = use(fetchPlayers);
  console.log(playersData);
  return (
    <div className="font max-w-[1200px] mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center">
      {
        playersData.map(player => <Player player = {player}></Player>)
      }
    </div>
  );
};

export default AvailablePlayers;
