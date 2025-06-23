import { routes } from "@/lib/routes";
import { IMAGES } from "@/utils/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NoUser = () => {
  return (
    <div className="bg-gray-1500 py-8 flex flex-col items-center gap-4 rounded-[16px] mt-4">
      <Image src={IMAGES.NO_USER} alt="No User" width={56} height={56} />
      <h6 className="text-xs leading-[200%] font-medium font-geist text-gray-1100 text-center">
        Use the search field above or the <br />
        <Link
          className="px-1.5 py-0.5 border-1 border-dashed border-gray-1600 rounded-[6px]"
          href={routes.COLLECTION}
        >
          Collections
        </Link>{" "}
        page to invite a team member
      </h6>
    </div>
  );
};

export default NoUser;
