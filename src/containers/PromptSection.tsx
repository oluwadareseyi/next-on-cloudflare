import { CreateCard } from "@/components/ui/card";
import aiLogo from "../assets/aiLogo.svg";
import Image from "next/image";
import IconsNav from "@/components/ui/IconsNav";
import Ai from "@/assets/svgIcons/Ai";
import { Button2 } from "@/components/ui/button";
import AiWhite from "@/assets/svgIcons/AiWhite";
import TextArea from "@/components/ui/TextArea";
import { Dispatch, SetStateAction, useState } from "react";
import Menu from "@/assets/svgIcons/Menu";
import Carouselmenu from "@/assets/svgIcons/Carouselmenu";
import type { iconDataType } from "@/lib/types";
import { inputChangeHandler } from "@/lib/helpers/inputChangeHandler";

type PromptSectionMenu = {
  iconsMenu: iconDataType[];
  setIconsMenu: Dispatch<SetStateAction<iconDataType[]>>;
};

const PromptSection = ({ iconsMenu, setIconsMenu }: PromptSectionMenu) => {
  // States
  const [prompt, setPrompt] = useState(
    "A coin floating around money, and other financial assets"
  );

  return (
    <CreateCard className={`flex-1 p-6 flex flex-col`}>
      <div className="flex items-center justify-between mb-6">
        <Image src={aiLogo} alt="AI" />
        <IconsNav data={iconsMenu} setData={setIconsMenu} />
      </div>
      <div className="flex-1">
        <TextArea
          value={prompt}
          onChange={(e) => inputChangeHandler(e, setPrompt, true)}
        />
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="shadow-dark rounded-[40px] py-2.5 px-5 border-[1.5px] border-gray-100">
          <Ai />
        </div>

        <Button2>
          <AiWhite />
          <span>Create</span>
        </Button2>
      </div>
    </CreateCard>
  );
};

export default PromptSection;
