import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./Component/AvailablePlayers/AvailablePlayers";
import Hero from "./Hero";
import Navbar from "./Navbar";
import SelectedPlayers from "./Component/SelectedPlayers/SelectedPlayers";

let fetchPlayers = fetch("/Players.json").then((res) => res.json());

function App() {
  let [toggole, setToggole] = useState(true);
  let [availableBalance, setAvailableBalance] = useState(600000000);

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <Hero></Hero>

      <div className="max-w-[1200px] mx-1 md:mx-auto mt-10 flex justify-between items-center">
        <h3 className="text-2xl font-bold">
          {toggole === true ? "Available Players" : "Selected Player"}
        </h3>
        <div>
          <button
            onClick={() => setToggole(true)}
            className={`px-8 cursor-pointer border-r-0 py-2 border-1 border-gray-200 rounded-l-xl ${
              toggole === true ? "bg-[#e7fe29]" : ""
            } ${toggole === true ? "font-bold" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setToggole(false)}
            className={`px-8 cursor-pointer border-l-0 py-2 border-1 border-gray-200 rounded-r-xl ${
              toggole === false ? "bg-[#e7fe29]" : ""
            } ${toggole === false ? "font-bold" : ""}`}
          >
            Selected <span>(0)</span>
          </button>
        </div>
      </div>

      {toggole === true ? (
        <Suspense fallback={<h3>Just a sec</h3>}>
          <AvailablePlayers
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            fetchPlayers={fetchPlayers}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <Suspense fallback={<h3>Just a sec</h3>}>
          <SelectedPlayers></SelectedPlayers>
        </Suspense>
      )}
    </>
  );
}

export default App;
