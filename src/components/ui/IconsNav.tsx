"use client";

import { activeToggler } from "@/lib/helpers/activeHandlers";
import { iconDataType } from "@/lib/types";
import { Dispatch, SetStateAction } from "react";

type IconsNavType = {
  data: iconDataType[];
  setData: Dispatch<SetStateAction<iconDataType[]>>;
};

const IconsNav = ({ data, setData }: IconsNavType) => {
  return (
    <div className="flex items-center gap-1 rounded-[90px] p-1 border-1 border-white-200 bg-gray-1000">
      {data?.map((icon, i) => {
        return (
          <div
            className={`${
              icon?.isActive && "shadow-black bg-white"
            } rounded-[90px] py-1 px-3.5 flex items-center justify-center cursor-pointer shrink-0 transition-all duration-200 ease-in-out `}
            onClick={() => {
              activeToggler(i, data, setData);
            }}
            key={i}
          >
            {icon?.icon}
          </div>
        );
      })}
    </div>
  );
};

export default IconsNav;
