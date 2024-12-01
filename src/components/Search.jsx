import React from "react";
import PriceDropDown from "./PriceDropDown";
import PropertyDropDown from "./PropertyDropDown";
import CityDropDown from "./CityDropDown";
import { RiSearch2Line } from "react-icons/ri";

function Search() {
  return (
    <div className="flex flex-col lg:flex-row text-gray-100 px-8 py-6 max-w-[1170px] lg:w-full mx-auto relative backdrop-blur-sm justify-between gap-4 lg:gap-3 lg:-top-4 lg:shadow-lg lg:bg-transparent rounded">
      <PriceDropDown />
      <PropertyDropDown />
      <CityDropDown />
      <button className="bg-red-500 hover:bg-red-600 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-lg">
        <RiSearch2Line />
      </button>
    </div>
  );
}

export default Search;
