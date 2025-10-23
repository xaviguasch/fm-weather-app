import IconLogo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="text-midnight-neutral-0">
      <div className="flex flex-row justify-between items-center">
        <img src={IconLogo} className=" h-[28px]  w-[138px] " alt="" />
        <div>other</div>
      </div>
    </div>
  );
};

export default Header;
