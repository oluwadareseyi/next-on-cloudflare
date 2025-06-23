import GeneralSettings from "./GeneralSettings";
import PromptSection from "@/containers/PromptSection";
import PromptResults from "./PromptResults";
import Menu from "@/assets/svgIcons/Menu";
import Carouselmenu from "@/assets/svgIcons/Carouselmenu";
import { useEffect, useState } from "react";
import { iconDataType } from "@/lib/types";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";

const RequestTab = () => {
  // States
  const [iconsMenu, setIconsMenu] = useState<iconDataType[]>([
    {
      icon: <Menu />,
      isActive: true,
      key: "tab",
    },
    {
      icon: <Carouselmenu />,
      isActive: false,
      key: "carousel",
    },
  ]);

  // Utils
  const activeView: "tab" | "carousel" | undefined = iconsMenu.find(
    (data) => data?.isActive
  )?.key;

  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();

  // Effects
  useEffect(() => {
    if (activeView === "carousel") {
      updateSearchParams("imageId", "1", "set");
    }
  }, [activeView]);

  return (
    <section className="h-[calc(100%-var(--spacing)*9.5)] bg-white-100 py-10 px-12.5 flex items-stretch gap-4 rounded-4xl box-border">
      <div className="basis-[428px] flex flex-col gap-3 shrink-0">
        <PromptSection iconsMenu={iconsMenu} setIconsMenu={setIconsMenu} />
        <GeneralSettings />
      </div>
      <div className="flex-1 box-border max-w-[calc(100%-428px)]">
        <PromptResults view={activeView} />
      </div>
    </section>
  );
};

export default RequestTab;
