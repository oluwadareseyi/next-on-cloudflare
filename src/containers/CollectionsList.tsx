import CollectionCard from "@/components/ui/CollectionCard";
import { collections } from "@/utils/dummyUtils";

const CollectionsList = () => {
  return (
    <section className="py-8 px-12 flex-1 flex flex-wrap rounded-b-[16px] gap-6 relative bg-white-100 overflow-y-auto">
      {collections.map((data, index) => {
        return (
          <CollectionCard
            key={index}
            {...data}
            className="basis-[calc(25%-24px)]"
          />
        );
      })}
      <div className="g-gradient-to-b from-[#F9FAFB] to-[#FFFFFF] w-full h-[40%] absolute bottom-0 left-0 rounded-b-[16px]"></div>
    </section>
  );
};

export default CollectionsList;
