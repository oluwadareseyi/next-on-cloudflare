import Photos from "@/assets/svgIcons/Photos";
import Image from "next/image";

type CollectionCardTypes = {
  avatar: string;
  title: string;
  lastEdited: string;
  imageCount: number;
  image: string;
  className?: string;
};

const CollectionCard = ({
  image,
  avatar,
  title,
  lastEdited,
  imageCount,
  className,
}: CollectionCardTypes) => {
  return (
    <div className={`${className}`}>
      <Image
        src={image}
        alt={title}
        height={258}
        width={234}
        className="rounded-[24px] w-full"
      />
      <div className="flex items-center gap-2 bover:bg-gray-1400 cursor-pointer rounded-[12px] mt-3">
        <Image
          src={avatar as string}
          width={32}
          height={32}
          alt={title}
          className="rounded-full"
        />
        <div>
          <p className="text-sm font-medium text-black-700">{title}</p>
          <p className="text-xs font-medium text-gray-1100">
            Edited {lastEdited} ago
          </p>
        </div>

        <div className="flex items-center gap-[1px] ml-auto">
          <Photos />
          <p className="text-xs font-medium text-gray-1100">{imageCount}</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
