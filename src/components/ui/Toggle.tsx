import toggle from "../../assets/toggle.svg";
import Image from "next/image";
import ChevronUpAndDown from "@/assets/svgIcons/ChevronUpAndDown";

const Toggle = () => {
  return (
    <div className="w-[56px] h-8 flex items-center gap-1 rounded-[90px] pl-0.5 pr-2 py-0.5 bg-gray-400">
      <Image
        src={toggle}
        alt="Toggle"
        className="h-full w-full grayscale-[20]"
      />
      <ChevronUpAndDown />
    </div>
  );
};

export default Toggle;
