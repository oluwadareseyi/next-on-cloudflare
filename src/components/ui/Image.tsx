import { useState } from "react";
import "react-image-crop/dist/ReactCrop.css";
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  PercentCrop,
  PixelCrop,
  type Crop,
} from "react-image-crop";
import Image from "next/image";

type ImageTypes = {
  src: string;
  alt: string;
  width: number;
  height: number;
  cropShape?: "circular" | "square";
};

const ImageComponent = ({ src, alt, width, height, cropShape }: ImageTypes) => {
  // Utils
  const MIN_DIMENSION = 150;
  const ASPECT_RATIO = 1;

  // States
  const [isCropping, setisCropping] = useState(true);
  const [crop, setCrop] = useState<PercentCrop | undefined>();

  //   Helpers
  const onImageLoad = (e: any) => {
    const { width, height } = e.currentTarget;
    const cropWidthInPercent = (MIN_DIMENSION / width) * 100;

    const crop = makeAspectCrop(
      {
        unit: "%",
        width: cropWidthInPercent,
      },
      ASPECT_RATIO,
      width,
      height
    );
    const centeredCrop = centerCrop(crop, width, height);
    setCrop(centeredCrop);
  };

  return (
    <>
      {isCropping ? (
        <ReactCrop
          crop={crop}
          onChange={(_, percentCrop) => {
            setCrop(percentCrop);
          }}
          circularCrop={cropShape === "circular"}
          keepSelection
          aspect={ASPECT_RATIO}
          minWidth={MIN_DIMENSION}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            onLoad={onImageLoad}
          />
        </ReactCrop>
      ) : (
        <Image src={src} alt={alt} width={width} height={height} />
      )}
    </>
  );
};

export default ImageComponent;
