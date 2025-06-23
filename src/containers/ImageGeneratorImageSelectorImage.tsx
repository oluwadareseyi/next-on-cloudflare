import { imagesType } from "@/lib/types";
import Image from "next/image";

type ImageGeneratorImageSelectorImageTypes = {
  activeImage: imagesType | undefined;
};

const ImageGeneratorImageSelectorImage = ({
  activeImage,
}: ImageGeneratorImageSelectorImageTypes) => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <Image
        src={activeImage?.image as string}
        alt="Prompt Image"
        width={534}
        height={525}
      />
    </div>
  );
};

export default ImageGeneratorImageSelectorImage;
