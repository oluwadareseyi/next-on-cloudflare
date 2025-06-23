import ImageGeneratorImageDetails from "./ImageGeneratorImageDetails";
import ImageGeneratorsImageSelector from "./ImageGeneratorsImageSelector";

type ImageGeneratorsTypes = {
  onClose: () => void;
};

const ImageGenerators = ({ onClose }: ImageGeneratorsTypes) => {
  return (
    <section className="flex items-stretch h-[100vh] bg-[#1A1A1AF2] backdrop-blur-sm">
      <ImageGeneratorsImageSelector onClose={onClose} />
      <ImageGeneratorImageDetails />
    </section>
  );
};

export default ImageGenerators;
