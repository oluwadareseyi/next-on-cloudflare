import AspectRatio from "@/assets/svgIcons/AspectRatio";
import ChevronDown from "@/assets/svgIcons/ChevronDown";
import Style from "@/assets/svgIcons/Style";
import { CreateCard } from "@/components/ui/card";
import Dropdown from "@/components/ui/Dropdown";
import { useState } from "react";

const GeneralSettings = () => {
  // States
  const [setting] = useState([
    {
      icon: <Style />,
      property: "Style",
      value: "Astral Genie 2o",
      tip: "Astral Genie is powered by ChatGPT 4o",
    },
    {
      icon: <AspectRatio />,
      property: "Aspect ratio",
      value: "Square (1 : 1)",
    },
  ]);
  const [isOpen, setisOpen] = useState(true);

  return (
    <CreateCard>
      <div
        className="flex items-center justify-between cursor-pointer select-none px-6 py-4"
        onClick={() => setisOpen((prevState) => !prevState)}
      >
        <h4 className="font-geist font-medium text-sm text-gray-500">
          General Settings
        </h4>
        <ChevronDown isActive={isOpen} />
      </div>

      <div
        className="overflow-hidden bg-white-100 border-1 border-gray-qoo rounded-3xl"
        style={
          isOpen
            ? { border: "1px solid #f5f5f5" }
            : { border: "1px solid transparent" }
        }
      >
        <div
          style={
            isOpen ? { maxHeight: "500px" } : { maxHeight: "0px", padding: 0 }
          }
          className="p-6 transition-all duration-200 ease-in-out"
        >
          {setting.map((data, i) => {
            return <Dropdown {...data} key={i} />;
          })}
        </div>
      </div>
    </CreateCard>
  );
};

export default GeneralSettings;
