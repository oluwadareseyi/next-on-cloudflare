"use client";

import {
  activeToggler,
  activeTogglerRestAll,
} from "@/lib/helpers/activeHandlers";
import type { Dispatch, SetStateAction } from "react";
import type { navItemTypes } from "@/lib/types";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import { capitalizeEachWord } from "@/lib/helpers/capitalize";
import Close from "@/assets/svgIcons/Close";
import Plus from "@/assets/svgIcons/Plus";
import "./style.css";

type SectionsNavTypes = {
  navItems: navItemTypes[];
  setNavItems: Dispatch<SetStateAction<navItemTypes[]>>;
  type?: "secondary" | "tertiary";
  isRoute?: boolean;
  id?: string;
};

const SectionsNav = ({
  navItems,
  setNavItems,
  isRoute,
  id,
}: SectionsNavTypes) => {
  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();

  return (
    <section
      className={`flex overflow-auto items-center no-scrollbar group select-none`}
      id={id}
    >
      {navItems.map((navItem, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              if (isRoute) {
                updateSearchParams("section", navItem?.id, "set");
              }
              activeTogglerRestAll(index, navItems, setNavItems);
            }}
            className={`c-nav__item font-geist font-medium text-[12px] py-2.5 px-3 transition-all duration-200 ease-in-out shrink-0 flex items-center gap-4.5 cursor-pointer text-gray-500 ${
              navItem.isActive && "bg-white-100 active"
            }`}
          >
            <span
              className={`w-[90px] line-clamp-1 overflow-x-hidden text-ellipsis`}
            >
              {capitalizeEachWord(navItem.title)}
            </span>

            <Close
              onClick={(e: any) => {
                e.stopPropagation();

                setNavItems((prevState) => {
                  let updatedState = [...prevState];

                  const filteredNavItems = updatedState.filter((_, i) => {
                    return i !== index;
                  });

                  updatedState = filteredNavItems;

                  return updatedState;
                });
              }}
            />
          </div>
        );
      })}

      <div
        className="font-geist c-nav__item__add font-medium text-[12px] py-2.5 px-3 transition-all duration-200 ease-in-out shrink-0 flex items-center gap-4.5 cursor-pointer text-gray-500"
        onClick={() => {
          setNavItems((prevstate: any) => {
            return [
              ...prevstate,
              {
                title: "New tab",
                id: navItems.length,
                route: "/",
                isActive: false,
              },
            ];
          });
        }}
      >
        <Plus />
        <span>Make a Wish</span>
      </div>
    </section>
  );
};

export default SectionsNav;
