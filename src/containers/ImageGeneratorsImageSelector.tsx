"use client";

import ImageGeneratorImageSelectorHeader from "./ImageGeneratorImageSelectorHeader";
import ImageGeneratorImageSelectorImage from "./ImageGeneratorImageSelectorImage";
import ImageGeneratorImageSelectorImageList from "./ImageGeneratorImageSelectorImageList";
import cash1 from "../assets/cash.svg";
import cash2 from "../assets/cash2.svg";
import cash3 from "../assets/cash3.svg";
import cash4 from "../assets/cash4.svg";
import { useEffect } from "react";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import { DUMMY_IMAGES } from "@/utils/dummyUtils";

type ImageGeneratorsImageSelectorTypes = {
  onClose?: () => void;
};

const ImageGeneratorsImageSelector = ({
  onClose,
}: ImageGeneratorsImageSelectorTypes) => {
  // Utils
  const images = [
    {
      id: 1,
      image: cash1,
    },
    {
      id: 2,
      image: cash2,
    },
    {
      id: 3,
      image: cash3,
    },
    {
      id: 4,
      image: cash4,
    },
  ];

  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();

  //   Utils
  const activeImageId = updateSearchParams("imageId", undefined, "get");
  const activeImage = images.find((data) => data?.id === Number(activeImageId));
  const currentIndex = images.findIndex(
    (img) => img.id === Number(activeImageId)
  );

  // EFfects
  useEffect(() => {
    if (images.length > 0 && !activeImageId) {
      const firstImage = images[0];
      updateSearchParams("imageId", String(firstImage.id), "set");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleKeyDown = (e: KeyboardEvent) => {
        let nextIndex = currentIndex;

        if (e.key === "ArrowRight") {
          nextIndex = (currentIndex + 1) % images.length;
        } else if (e.key === "ArrowLeft") {
          nextIndex = (currentIndex - 1 + images.length) % images.length;
        } else {
          return;
        }

        const nextImageId = images[nextIndex].id;

        updateSearchParams("imageId", String(nextImageId), "set");
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [currentIndex, activeImageId]);

  return (
    <section className="flex-1 pt-8 pb-10 flex flex-col gap-7.5">
      <ImageGeneratorImageSelectorHeader onClose={onClose} />
      <ImageGeneratorImageSelectorImage activeImage={activeImage} />
      <ImageGeneratorImageSelectorImageList
        images={DUMMY_IMAGES}
        activeImage={activeImageId}
      />
    </section>
  );
};

export default ImageGeneratorsImageSelector;
