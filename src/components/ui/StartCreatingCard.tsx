import Navigateout from "@/assets/svgIcons/Navigateout";
import startCreating from "../../assets/startCreating.svg";
import Image from "next/image";
import Close from "@/assets/svgIcons/Close";

const StartCreatingCard = () => {
  return (
    <div className={`rounded-2xl shadow-dark bg-white-100 relative`}>
      <Image
        src={startCreating}
        alt="Start creating"
        className="w-full h-17 rounded-t-2xl object-cover grayscale-100"
      />
      <div className="flex items-center gap-4 border-b-2xl p-3">
        <div>
          <h3 className="font-geist font-semibold text-[12px] align-middle text-black-100 mb-1">
            Start Creating
          </h3>
          <p className="font-geist font-medium text-[11px] align-middle text-gray-300">
            Upgrade to premium and start creating consistent assets.
          </p>
        </div>

        <Navigateout />
      </div>

      <div className="w-6 h-6 top-2 right-2 rounded-full absolute flex items-center justify-center bg-[#a3a3a3a8] backdrop-blur-[5px]">
        <Close fill="#FFFFFF" />
      </div>
    </div>
  );
};

export default StartCreatingCard;
