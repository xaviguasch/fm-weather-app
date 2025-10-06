const Main = () => {
  return (
    <div className="mt-12">
      <h1 className="text-midnight-neutral-0 text-preset-2 text-center">
        How's the sky looking today?
      </h1>

      <div className="flex flex-col gap-3">
        <input
          className="bg-midnight-neutral-800 w-full rounded-xl placeholder-midnight-neutral-200 text-preset-5 py-4 pl-[60px]"
          type="text"
          placeholder="Search for a place..."
        />
        <button className="bg-royal-blue-500 w-full text-midnight-neutral-0 text-preset-5 rounded-xl py-4">
          Search
        </button>
      </div>
    </div>
  );
};

export default Main;
