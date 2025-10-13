const HourlyPanel = ({ icon, hour, temp }) => {
  return (
    <div className="flex flex-row justify-between items-center pl-3 pr-4 py-[10px] bg-midnight-neutral-700 border border-midnight-neutral-600 rounded-lg text-midnight-neutral-0">
      <div className="flex flex-row justify-start items-center gap-2">
        <img src={icon} alt="" className=" h-[40px]  w-[40px] " />
        <span className="text-preset-5">{hour} PM</span>
      </div>
      <span className="text-preset-7">{temp}º</span>
    </div>
  );
};

export default HourlyPanel;
