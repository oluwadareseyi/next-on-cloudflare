import CreateFolder from "@/assets/svgIcons/CreateFolder";
import Download from "@/assets/svgIcons/Download";
import Model from "@/assets/svgIcons/Model";
import Square from "@/assets/svgIcons/Square";
import React from "react";
import ImageGeneratorCreateVariations from "./ImageGeneratorCreateVariations";

// Styles
const modelInfoTextStyles = "text-[10px] text-white-300 font-semibold";

const ImageGeneratorImageDetails = () => {
  return (
    <section className="w-[380px] bg-black-gradient p-[32px]  text-white flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-6 mb-7 py-2.5">
          <h2 className="text-white text-sm font-geist font-medium flex items-center gap-2">
            <span>Original</span>
            <span className="text-gray-800">5d</span>
          </h2>
          <Download fill="#fff" dimensions="20px" className="ml-auto" />
          <CreateFolder dimensions="20" fill="#fff" />
        </div>

        <p className="text-white text-sm font-geist font-medium mb-2">
          A coin floating around money, and other financial assets
        </p>

        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-2 py-0.75 px-2 bg-black-500 rounded-2xl border-black-600 border-[0.5px]">
            <Model />
            <span className={modelInfoTextStyles}>AG 2o</span>
          </div>

          <div className="flex items-center gap-2 py-0.75 px-2 bg-purple-100 rounded-2xl border-purple-100 border-[0.5px]">
            <Square />
            <span className={modelInfoTextStyles}>Square (1:1)</span>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div>
        <ImageGeneratorCreateVariations />
      </div>
    </section>
  );
};

export default ImageGeneratorImageDetails;
