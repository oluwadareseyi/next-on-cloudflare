import EditPencil from "@/assets/svgIcons/EditPencil";
import Return from "@/assets/svgIcons/Return";
import { breadCrumbNavItemTypes } from "@/lib/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useState } from "react";

type BreadCrumbTypes = {
  navItems: breadCrumbNavItemTypes[];
  setNavItems: Dispatch<SetStateAction<breadCrumbNavItemTypes[]>>;
  icon: React.ReactNode;
};

// Utils
const textStyles = "font-geist font-medium text-[14px] text-black-200";
const inActiveTextStyles = "font-geist font-medium text-[14px] text-gray-1100";
const savePrompyStyles =
  "font-geist font-medium text-[12px] text-gray-1200 ml-1";

const BreadCrumb = ({ navItems, setNavItems, icon }: BreadCrumbTypes) => {
  // ROuter
  const router = useRouter();

  //   States
  const [isEditing, setisEditing] = useState(false);

  return (
    <nav className="flex gap-2 items-center">
      <span>
        {navItems?.length > 1 ? (
          <Return
            onClick={() => {
              router.back();
            }}
          />
        ) : (
          icon
        )}
      </span>

      <div className="flex items-center gap-2">
        {navItems.map((data, i) => {
          if (i < navItems?.length - 1) {
            return (
              <>
                <Link
                  key={data?.title}
                  href={data?.route}
                  className={inActiveTextStyles}
                >
                  {data?.title}
                </Link>
                <span>/</span>
              </>
            );
          }

          if (i === navItems?.length - 1) {
            return (
              <div className="flex items-center gap-1">
                {isEditing ? (
                  <input
                    value={data?.title}
                    className={`${textStyles} border-none outline-none min-w-auto max-w-[300px]`}
                    onChange={(e) => {
                      setNavItems((prevState) => {
                        let updatedState = [...prevState];

                        updatedState[i].title = e.target.value;

                        return updatedState;
                      });
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        setisEditing(false);
                      }
                    }}
                  />
                ) : (
                  <Link
                    key={data?.title}
                    href={data?.route}
                    className={textStyles}
                  >
                    {data?.title}
                  </Link>
                )}

                {i !== 0 && (
                  <>
                    {!isEditing ? (
                      <EditPencil
                        onClick={() => setisEditing((prevState) => !prevState)}
                      />
                    ) : (
                      <p className={savePrompyStyles}>
                        Press{" "}
                        <span className="text-gray-1100 font-geist font-medium text-[10px] py-1 px-1.5 rounded-[90px] bg-gray-1200">
                          enter
                        </span>{" "}
                        to save
                      </p>
                    )}
                  </>
                )}
              </div>
            );
          }
          return (
            <Link
              key={data?.title}
              href={data?.route}
              className={inActiveTextStyles}
            >
              <span>{data?.title}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BreadCrumb;
