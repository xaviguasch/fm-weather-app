const InfoPanel = ({ text, data }) => {
  return (
    <div className="text-midnight-neutral-0 border border-midnight-neutral-600 rounded-xl p-5 bg-midnight-neutral-800 flex flex-col gap-6">
      <span className="text-preset-6 text-midnight-neutral-200">{text}</span>
      <span className="text-preset-3 text-midnight-neutral-0">{data}</span>
    </div>
  );
};

export default InfoPanel;
