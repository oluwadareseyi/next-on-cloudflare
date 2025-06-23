"use client";

import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import { imagesType } from "@/lib/types";
import Image from "next/image";

type ImageGeneratorImageSelectorImageListTypes = {
  images: imagesType[];
  activeImage?: string | null;
  onImageClick?: (id: number | string) => void;
};

const ImageGeneratorImageSelectorImageList = ({
  images,
  activeImage,
  onImageClick,
}: ImageGeneratorImageSelectorImageListTypes) => {
  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();

  return (
    <div className="flex items-end justify-center gap-1 overflow-auto">
      {images.map((image: imagesType) => {
        return (
          <Image
            src={image.image}
            alt="blank"
            width={88}
            height={88}
            key={image.id}
            className={`rounded-lg ${
              Number(activeImage) === image.id
                ? "h-[104px] w-[104px]"
                : "h-[88px] w-[88px]"
            } transition-all duration-200 ease-in-out hover:opacity-50 cursor-pointer`}
            onClick={() => {
              updateSearchParams("imageId", String(image?.id), "set");

              if (onImageClick) {
                onImageClick(image.id);
              }
            }}
          />
        );
      })}
    </div>
  );
};

export default ImageGeneratorImageSelectorImageList;
