import { useContext, useState } from "react";
import { HiMiniMapPin } from "react-icons/hi2";
import { HouseContext } from "./HouseContext";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function CityDropDown() {
  const { city, setCity, cities, setCities } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dropdown relative">
      <button
        className="dropdown-btn w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HiMiniMapPin className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{city}</div>
          <div>{isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</div>
        </div>
      </button>
    </div>
  );
}

export default CityDropDown;
