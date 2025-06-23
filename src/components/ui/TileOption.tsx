type TileOptionTypes = {
  title: string;
  options: string[];
  selected?: string;
  onTileClick?: (data: string) => void;
};

const TileOption = ({
  title,
  options,
  selected,
  onTileClick,
}: TileOptionTypes) => {
  return (
    <div className="flex items-center gap-2 mb-6">
      <div className="text-gray-900 text-sm font-geist font-medium ">
        {title}
      </div>

      {options.map((data, i) => {
        return (
          <div
            className={`w-[105px] flex items-center justify-center  text-sm font-geist font-medium px-9 py-2.5  rounded-lg cursor-pointer transition-all  duration-200 ease-in-out hover:text-white-100 ${
              selected === data
                ? "bg-[#3D3D3DF2] text-white-100"
                : "bg-[#292929F2]  text-gray-800"
            } ${i === 0 && "ml-auto"}`}
            onClick={() => {
              onTileClick && onTileClick(data);
            }}
          >
            {data}
          </div>
        );
      })}
    </div>
  );
};

export default TileOption;
