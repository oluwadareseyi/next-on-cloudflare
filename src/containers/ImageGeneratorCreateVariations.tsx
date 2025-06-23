"use client";

import Close from "@/assets/svgIcons/Close";
import CropMany from "@/assets/svgIcons/CropMany";
import Rerun from "@/assets/svgIcons/Rerun";
import { Button2 } from "@/components/ui/button";
import TileOption from "@/components/ui/TileOption";
import { useState } from "react";

const ImageGeneratorCreateVariations = () => {
  // States
  const [variations, setVariations] = useState({
    vary: "",
    details: "",
    influence: "",
  });

  const variationOptions = ["Soft", "Strong"];
  const detailsOptions = ["Subtle", "Creative"];
  const influenceOptions = ["Low", "High"];

  //   Handlers
  const clearOptionHandler = () => {
    setVariations({
      vary: "",
      details: "",
      influence: "",
    });
  };

  return (
    <div>
      <div className="flex gap-2 items-center mb-4">
        <CropMany dimensions={{ width: "16", height: "16" }} fill="#999999" />
        <span className="text-gray-800 text-sm font-geist font-medium">
          Create Variations
        </span>
      </div>

      <div className="border-b-1 border-black-300">
        <TileOption
          title="Vary"
          options={variationOptions}
          selected={variations.vary}
          onTileClick={(vary) =>
            setVariations((prevState) => {
              return { ...prevState, vary };
            })
          }
        />

        <TileOption
          title="Details"
          options={detailsOptions}
          selected={variations.details}
          onTileClick={(details) =>
            setVariations((prevState) => {
              return { ...prevState, details };
            })
          }
        />

        <TileOption
          title="Influence"
          options={influenceOptions}
          selected={variations.influence}
          onTileClick={(influence) =>
            setVariations((prevState) => {
              return { ...prevState, influence };
            })
          }
        />
      </div>

      <div className="flex items-center gap-4 mt-6">
        <Button2 className="flex-1 text-gray-900" onClick={clearOptionHandler}>
          <Close />
          <span>Clear</span>
        </Button2>
        <Button2 className="flex-1">
          <Rerun />
          <span>Rerun</span>
        </Button2>
      </div>
    </div>
  );
};

export default ImageGeneratorCreateVariations;
