import { Suspense } from "react";
import "./App.css";
import AvailablePlayers from "./Component/AvailablePlayers/AvailablePlayers";
import Hero from "./Hero";
import Navbar from "./Navbar";

let fetchPlayers = fetch("/Players.json").then((res) => res.json());

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<h3>Just a sec</h3>}>
        <AvailablePlayers fetchPlayers={fetchPlayers}></AvailablePlayers>
      </Suspense>
    </>
  );
}

export default App;
