import IconLogo from "../assets/images/logo.svg";
import IconUnits from "../assets/images/icon-units.svg";
import IconDropdown from "../assets/images/icon-dropdown.svg";

const Header = () => {
  return (
    <div className="text-midnight-neutral-0">
      <div className="flex flex-row justify-between items-center">
        <img src={IconLogo} className=" h-[28px]  w-[138px] " alt="" />
        <div>
          <button className="flex flex-row justify-between items-center gap-1.5 bg-neutral-800 px-2.5 py-2 rounded-[6px]">
            <img src={IconUnits} alt="h-[14px] w-[14px]" />
            <span className="text-preset-8">Units</span>
            <img src={IconDropdown} alt="h-[9px] w-[14px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
