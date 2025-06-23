import CreateFolder from "@/assets/svgIcons/CreateFolder";
import Crop from "@/assets/svgIcons/Crop";
import CropMany from "@/assets/svgIcons/CropMany";
import { Download2 } from "@/assets/svgIcons/Download";
import Pencil from "@/assets/svgIcons/Pencil";
import Image from "next/image";
import { forwardRef } from "react";

type ResultCardTypes = {
  image: string;
  onEditClick?: () => void;
  className?: string;
};

const ResultCard = forwardRef<HTMLDivElement, ResultCardTypes>(
  ({ image, onEditClick, className }: ResultCardTypes, ref) => {
    return (
      <div
        className={` p-4 rounded-3xl bg-white-100  flex items-end justify-between overflow-hidden transition-all duration-200 ease-in-out border-2 border-transparent hover:border-2 hover:border-gray-500 grow-0 shrink-0  relative  group ${className}`}
        ref={ref as any}
      >
        <Image
          src={image}
          alt="Image"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%]"
        />

        <div className="flex rounded-[90px] py-1 px-1.5 shadow-dark bg-white-100 border-1 border-gray-100 transform-[translateY(70px)] transition-all duration-200 ease-in-out group-hover:transform-[translateY(0px)]">
          <div
            className="p-1.5 flex justify-center items-center border-r-1 border-[#ebebeb] cursor-pointer"
            onClick={() => {
              if (onEditClick) {
                onEditClick();
              }
            }}
          >
            <Pencil />
          </div>

          <div className="p-1.5 flex justify-center items-center border-r-1 border-[#ebebeb] cursor-pointer">
            <Crop />
          </div>

          <div className="p-1.5 flex justify-center items-center cursor-pointer">
            <CropMany />
          </div>
        </div>

        <div className="flex rounded-[90px] py-1 px-1.5 shadow-dark bg-white-100 border-1 border-gray-100 transform-[translateY(70px)] transition-all duration-200 ease-in-out group-hover:transform-[translateY(0px)]">
          <div className="p-1.5 flex justify-center items-center border-r-1 border-[#ebebeb] cursor-pointer">
            <Download2 />
          </div>

          <div className="p-1.5 flex justify-center items-center  cursor-pointer">
            <CreateFolder />
          </div>
        </div>
      </div>
    );
  }
);

export default ResultCard;
