import { StaticImageData } from "next/image";

export type navItemTypes = {
  title: string;
  route?: string;
  isActive?: boolean;
  description?: string;
  id: string;
  isBordered?: boolean;
};

export type iconDataType = {
  icon: React.ReactNode;
  isActive: boolean;
  key: "tab" | "carousel";
};

export type dimensionsType = {
  width: string;
  height: string;
};

export type imagesType = {
  id: number;
  image: string | StaticImageData;
};

export type breadCrumbNavItemTypes = {
  title: string;
  route: string;
};

export type genericObjectType = {
  [key: string]: boolean;
};
