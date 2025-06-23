"use client";

import Collapse from "@/assets/svgIcons/Collapse";
import Help from "@/assets/svgIcons/Help";
import Notofications from "@/assets/svgIcons/Notofications";
import { SidenavInput } from "../ui/input";
import Logo from "../ui/Logo";
import StartCreatingCard from "../ui/StartCreatingCard";
import Toggle from "../ui/Toggle";
import { sideNavRoutes } from "@/lib/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNav = () => {
  // Router
  const pathname = usePathname();

  return (
    <nav className={`$ w-[228px] py-6 px-2 flex flex-col`}>
      <div className="flex-1">
        <div className={` flex items-center justify-center mb-8`}>
          <Logo />
          <div className="shadow-dark w-7 h-7 ml-auto rounded-full flex items-center justify-center bg-white cursor-pointer">
            <Collapse />
          </div>
        </div>

        <SidenavInput placeholder="Make a Wish" className="mb-8" />

        <ul className="mt-[52px]">
          {sideNavRoutes.map((data) => {
            return (
              <li
                key={data?.title}
                className={`${
                  pathname === data?.route
                    ? `font-semibold text-black-100 bg-gray-200`
                    : `font-medium text-gray-500`
                }  list-none mb-2 py-2.5 px-3 rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-200`}
              >
                <Link
                  href={data?.route}
                  className="flex items-center gap-3 font-geist text-sm text-center align-middle"
                >
                  {data?.icon}
                  <span>{data?.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <StartCreatingCard />

        <div className="flex items-center mt-6 gap-1">
          <Toggle />
          <span className="ml-auto">
            <Help />
          </span>

          <Notofications />
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
