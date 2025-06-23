import Close from "@/assets/svgIcons/Close";
import Crop from "@/assets/svgIcons/Crop";
import CropMany from "@/assets/svgIcons/CropMany";
import Pencil from "@/assets/svgIcons/Pencil";
import ToolTip from "@/components/ui/ToolTip";

type ImageGeneratorImageSelectorHeaderTypes = { onClose?: () => void };

const actionStyles =
  "bg-[#33333380] rounded-[90px] cursor-pointer w-[68px] h-[48px] flex items-center justify-center";

const ImageGeneratorImageSelectorHeader = ({
  onClose,
}: ImageGeneratorImageSelectorHeaderTypes) => {
  return (
    <div className="flex flex-col gap-2 items-center relative">
      <div className="h-12 w-12 flex items-center justify-center bg=[#33333399] backdrop-blur-sm rounded-full absolute right-8 top-0">
        <Close
          dimension={{ width: "20", height: "20" }}
          fill="#fff"
          onClick={() => {
            onClose && onClose();
          }}
        />
      </div>

      <div className="flex gap-2 items-center justify-center">
        <ToolTip dialogBody="Edit">
          <div className={actionStyles}>
            <Pencil
              fill="#fff"
              dimensions={{ width: "16.25", height: "16.25" }}
            />
          </div>
        </ToolTip>

        <ToolTip dialogBody="Generate similar">
          <div className={actionStyles}>
            <Crop
              fill="#fff"
              dimensions={{ width: "16.25", height: "16.25" }}
            />
          </div>
        </ToolTip>

        <ToolTip dialogBody="Select Area">
          <div className={actionStyles}>
            <CropMany
              fill="#fff"
              dimensions={{ width: "16.25", height: "16.25" }}
            />
          </div>
        </ToolTip>
      </div>
    </div>
  );
};

export default ImageGeneratorImageSelectorHeader;
