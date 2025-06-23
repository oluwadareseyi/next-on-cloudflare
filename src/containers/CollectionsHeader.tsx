"use client";

import Check from "@/assets/svgIcons/Check";
import Collections from "@/assets/svgIcons/Collections";
import Comment from "@/assets/svgIcons/Comment";
import Ellipsis from "@/assets/svgIcons/Ellipsis";
import Globe from "@/assets/svgIcons/Globe";
import Plus from "@/assets/svgIcons/Plus";
import Search from "@/assets/svgIcons/Search";
import Sort from "@/assets/svgIcons/Sort";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { Button2 } from "@/components/ui/button";
import { activeTogglerRestAll } from "@/lib/helpers/activeHandlers";
import { setModalTrue } from "@/lib/helpers/modalHandlers";
import { routes } from "@/lib/routes";
import { breadCrumbNavItemTypes, genericObjectType } from "@/lib/types";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

type CollectionsHeaderHeader = {
  hasCollections?: boolean;
  isChild?: boolean;
  actions: genericObjectType;
  setActions: Dispatch<SetStateAction<genericObjectType>>;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setModal: Dispatch<SetStateAction<genericObjectType>>;
};

const CollectionsHeader = ({
  hasCollections,
  isChild,
  actions,
  setActions,
  searchTerm,
  setSearchTerm,
  setModal,
}: CollectionsHeaderHeader) => {
  // States
  const [navItems, setNavItems] = useState<breadCrumbNavItemTypes[]>([
    {
      title: "Collections",
      route: routes.COLLECTION,
    },
  ]);
  const [sortOptions, setSortOptions] = useState([
    {
      title: "Alphabetical (A-Z)",
      isActive: false,
    },
    {
      title: "Frequently Created",
      isActive: false,
    },
    {
      title: "Last Edited",
      isActive: false,
    },
  ]);

  // Refs
  const iconsContainerRef = useRef<null | HTMLDivElement>(null);
  const searchInputRef = useRef<null | HTMLInputElement>(null);

  // Effects
  useEffect(() => {
    const handleBlur = (e: MouseEvent) => {
      if (
        iconsContainerRef?.current &&
        !iconsContainerRef?.current?.contains(e.target as any)
      ) {
        if (searchTerm) {
          setActions((prevState) => {
            return { ...prevState, sort: false, comment: false };
          });
        } else {
          setActions({
            search: false,
            sort: false,
            comment: false,
          });
        }
      }
    };

    document.addEventListener("mousedown", handleBlur);

    return () => {
      document.removeEventListener("mousedown", handleBlur);
    };
  }, [searchTerm]);

  return (
    <header className="py-4 px-12 flex items-center justify-between rounded-t-[16px] bg-white-100 border-b-1 border-gray-1300 basis-[64px]">
      <BreadCrumb
        navItems={navItems}
        setNavItems={setNavItems}
        icon={<Collections />}
      />

      <div className="flex items-center gap-3" ref={iconsContainerRef}>
        {hasCollections ? (
          <>
            <Comment />
            <Ellipsis fill="#A4A7AE" />
            <Button2>
              <Globe />
              <span>Share</span>
            </Button2>
          </>
        ) : (
          <>
            <div>
              {!actions.search ? (
                <Search
                  onClick={() => {
                    setActions((prevState) => {
                      return { ...prevState, search: true };
                    });
                    setTimeout(() => {
                      if (searchInputRef?.current) {
                        searchInputRef?.current?.focus();
                        console.log("ocused");
                      }
                    }, 100);
                  }}
                />
              ) : (
                <input
                  className={`font-geist font-medium text-[14px] text-black-200 outline-none border-1 border-gray-1200 py-2 px-2.5 rounded-[8px]  min-w-[360px] focus:border-blue-100  placeholder:text-gray-1200 transition-all duration-200 ease-in-out shadow-none focus:box-shadow-blue`}
                  placeholder="Search by collection name"
                  type="search"
                  value={searchTerm}
                  name="search"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  tabIndex={0}
                  ref={searchInputRef}
                />
              )}
            </div>
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 ease-in-out relative ${
                actions?.sort && "bg-gray-1000"
              }`}
            >
              <Sort
                onClick={() => {
                  setActions((prevState) => {
                    return { ...prevState, sort: !prevState?.sort };
                  });
                }}
              />

              {actions?.sort && (
                <div className="w-[181px] absolute top-[calc(100%+12px)] right-0 rounded-xl p-1 z-10 bg-white-100 box-shadow-1">
                  {sortOptions?.map((data, i) => {
                    return (
                      <div
                        key={data?.title}
                        className="p-2 font-geist text-black-700 font-medium text-xs hover:bg-gray-1400 transition-all duration-200 ease-in-out mb-1 rounded-lg flex items-center justify-between select-none"
                        onClick={() => {
                          activeTogglerRestAll(i, sortOptions, setSortOptions);
                        }}
                      >
                        <span>{data?.title}</span>
                        {data?.isActive && <Check />}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <Button2
              onClick={() => {
                setModalTrue(setModal, "create");
              }}
            >
              <Plus fill="#fff" />
              <span>Create New</span>
            </Button2>
          </>
        )}
      </div>
    </header>
  );
};

export default CollectionsHeader;
