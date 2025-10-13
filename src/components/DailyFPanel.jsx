const DailyFPanel = ({ day, icon, maxTemp, minTemp }) => {
  return (
    <div className="text-midnight-neutral-0 border border-midnight-neutral-600 rounded-xl py-4 px-2.5 bg-midnight-neutral-800 flex flex-col gap-4 items-center">
      <span className="text-preset-6">{day}</span>
      <img src={icon} alt="" className=" h-[60px]  w-[60px] " />
      <div className="flex flex-row justify-between w-full">
        <span className="text-preset-7">{maxTemp}º</span>
        <span className="text-preset-7 text-midnight-neutral-200">
          {minTemp}º
        </span>
      </div>
    </div>
  );
};

export default DailyFPanel;
