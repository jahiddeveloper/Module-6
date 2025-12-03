import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AvailablePlayers from "./Component/AvailablePlayers/AvailablePlayers";
import Hero from "./Hero";
import Navbar from "./Navbar";
import SelectedPlayers from "./Component/SelectedPlayers/SelectedPlayers";
import Subscribe from "./Subscribe";
import Fotter from "./Fotter";

let fetchPlayers = fetch("/Players.json").then((res) => res.json());

function App() {
  let [toggole, setToggole] = useState(true);
  let [availableBalance, setAvailableBalance] = useState(6000000000);
  let [buyPlayers, setBuyPlayers] = useState([]);

  let removePlayer = (p) => {
    let filterData = buyPlayers.filter((ply) => ply.name !== p.name);
    setBuyPlayers(filterData);
    setAvailableBalance(filterData + parseInt(p.price));
  };

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <Hero></Hero>

      <div className="max-w-[1200px] mx-1 md:mx-auto mt-10 flex justify-between items-center">
        <h3 className="text-xl md:text-2xl font-bold">
          {toggole === true
            ? "Available Players"
            : `Selected Player (${buyPlayers.length}/6)`}
        </h3>
        <div>
          <button
            onClick={() => setToggole(true)}
            className={`px-4 md:px-8 cursor-pointer border-r-0 py-2 border-1 border-gray-200 rounded-l-xl ${
              toggole === true ? "bg-[#e7fe29]" : ""
            } ${toggole === true ? "font-bold" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setToggole(false)}
            className={`px-4 md:px-8 cursor-pointer border-l-0 py-2 border-1 border-gray-200 rounded-r-xl ${
              toggole === false ? "bg-[#e7fe29]" : ""
            } ${toggole === false ? "font-bold" : ""}`}
          >
            Selected <span>({buyPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggole === true ? (
        <Suspense fallback={<h3>Just a sec</h3>}>
          <AvailablePlayers
            buyPlayers={buyPlayers}
            setBuyPlayers={setBuyPlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            fetchPlayers={fetchPlayers}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <Suspense fallback={<h3>Just a sec</h3>}>
          <SelectedPlayers
            toggole={toggole}
            setToggole={setToggole}
            removePlayer={removePlayer}
            buyPlayers={buyPlayers}
          ></SelectedPlayers>
        </Suspense>
      )}

      <Subscribe></Subscribe>
      <Fotter></Fotter>

      <ToastContainer />
    </>
  );
}

export default App;
