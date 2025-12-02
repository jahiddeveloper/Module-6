import React from "react";
import removeImg from "../../assets/remove.png"

const SelectedPlayers = ({buyPlayers}) => {
  console.log(buyPlayers);
  return (
    <div className="font max-w-[1200px] mx-auto mt-8">
      
      <div className="flex justify-between items-center border-1 border-gray-200 shadow-sm p-5 rounded-xl">
        <div className="flex items-center">
            <img className="h-18 w-18 object-cover rounded-xl" src="https://i.ibb.co/bt5xknf/Van-stock.webp" alt="" />
            <div className="ml-5">
              <h3 className="text-2xl font-bold">Jahidul Islam</h3>
              <p className="text-gray-500 mt-2">Hello world</p>
            </div>
        </div>
        <div>
            <img className="cursor-pointer hover:scale-150 hover:transition duration-300" src={removeImg} alt="" />
        </div>
      </div>

    </div>
  );
};

export default SelectedPlayers;
