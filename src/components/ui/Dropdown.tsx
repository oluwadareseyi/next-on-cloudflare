import ChevronDown from "@/assets/svgIcons/ChevronDown";

type DropdownTypes = {
  icon: React.ReactNode;
  property: string;
  value: string;
  tip?: string;
};

const Dropdown = ({ icon, property, value, tip }: DropdownTypes) => {
  return (
    <div className="mb-4">
      <div className="p-3.5 bg-white-100 border-1 border-gray-100 rounded-2xl flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center gap-3">
          {icon}
        </div>
        <div>
          <p className="font-geist font-medium text-[12px] mb-1 text-gray-300">
            {property}
          </p>
          <p className="font-geist font-medium text-sm mb-1 text-black-300">
            {value}
          </p>
        </div>

        <ChevronDown isActive={false} className="ml-auto" />
      </div>

      <p className="font-geist font-medium text-[10px] text-gray-700 mt-1">
        {tip}
      </p>
    </div>
  );
};

export default Dropdown;
