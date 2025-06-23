import ChevronDown from "@/assets/svgIcons/ChevronDown";
import Download from "@/assets/svgIcons/Download";
import Ellipsis from "@/assets/svgIcons/Ellipsis";
import { Button2 } from "@/components/ui/button";
import ResultCard from "@/components/ui/ResultCard";
import cash from "../assets/cash.svg";
import { useRef, useState } from "react";
import ImageGenerators from "./ImageGenerators";
import ImageGeneratorImageSelectorImageList from "./ImageGeneratorImageSelectorImageList";
import { DUMMY_IMAGES } from "@/utils/dummyUtils";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";

type PromptResultsTypes = { view: "carousel" | "tab" | undefined };

const PromptResults = ({ view }: PromptResultsTypes) => {
  // States
  const [displayGenerator, setDisplayGenerator] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();
  const activeImageId = updateSearchParams("imageId", undefined, "get");

  // Refs
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  return (
    <section
      className={`h-full w-full rounded-4xl bg-gray-100 px-2 py-3 flex flex-col overflow-hidden `}
    >
      {displayGenerator && (
        <div className="fixed top-0 right-0 h-full w-full z-10">
          <ImageGenerators onClose={() => setDisplayGenerator(false)} />
        </div>
      )}

      <div className="flex items-center gap-4 mb-3 px-3 mt-2.5">
        <h2 className="font-geist font-medium text-sm">
          A coin floating around money..
        </h2>

        <Button2
          type="null"
          className="ml-auto font-geist font-semibold text-sm py-2 px-4"
        >
          <Download />
          <span>Download all</span>
        </Button2>

        <Ellipsis className="cursor-pointer" />
        <ChevronDown
          className="cursor-pointer"
          onClick={() => setIsOpen((prevState) => !prevState)}
        />
      </div>

      <div
        className={`flex items-start  gap-3 h-full flex-1 overflow-y-auto transition-all duration-200 ease-in   ${
          view === "carousel"
            ? "flex-nowrap overflow-x-scroll scrollbar-hide snap-x snap-mandatory"
            : "flex-wrap"
        } ${isOpen ? "max-h-full" : "max-h-0"}`}
      >
        {DUMMY_IMAGES.map((data) => {
          return (
            <ResultCard
              image={data?.image}
              key={data?.id}
              onEditClick={() => {
                setDisplayGenerator(true);
              }}
              ref={(el) => (cardRefs.current[data.id] = el) as any}
              className={
                view === "carousel"
                  ? "basis-[calc(90%-12px)] h-[calc(100%-12px)] snap-start shrink-0"
                  : `basis-[calc(50%-12px)] h-[calc(50%-12px)]`
              }
            />
          );
        })}
      </div>

      <div
        className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
          view !== "carousel" ? "max-h-0" : "max-h-[500px] "
        }`}
      >
        <ImageGeneratorImageSelectorImageList
          images={DUMMY_IMAGES}
          activeImage={activeImageId}
          onImageClick={(id) => {
            cardRefs.current[id]?.scrollIntoView({
              behavior: "smooth",
              inline: "start",
              block: "nearest",
            });
          }}
        />
      </div>
    </section>
  );
};

export default PromptResults;
