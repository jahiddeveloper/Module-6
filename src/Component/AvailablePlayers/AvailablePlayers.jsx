import React, { use } from "react";
import Player from "../Player/Player";

const AvailablePlayers = ({
  fetchPlayers,
  setAvailableBalance,
  availableBalance,
  buyPlayers,
  setBuyPlayers,
}) => {
  let playersData = use(fetchPlayers)
  return (
    <div className="font max-w-[1200px] mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center">
      {playersData.map((player) => (
        <Player
        buyPlayers = {buyPlayers}
        setBuyPlayers = {setBuyPlayers}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          player={player}
        ></Player>
      ))}
    </div>
  );
};

export default AvailablePlayers;
