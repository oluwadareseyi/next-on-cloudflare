"use client";

import Ellipsis from "@/assets/svgIcons/Ellipsis";
import SectionsNav from "@/components/ui/SectionsNav/SectionsNav";
import RequestTab from "@/containers/RequestTab";
import AppLayout from "@/components/layout/AppLayout";
import type { navItemTypes } from "@/lib/types";
import { useState } from "react";

const Dashboard = () => {
  // States
  const [navItems, setNavItems] = useState<navItemTypes[]>([
    {
      title: "A coin floating in the skies",
      route: "/1",
      isActive: true,
      id: "1",
    },
    {
      title: "A coin floating in the skies",
      route: "/1",
      isActive: false,
      id: "2",
    },
  ]);
  return (
    <AppLayout className="h-[100svh] overflow-hidden">
      <div
        className={`h-9.5 flex items-center justify-between gap-4 c-nav__items ${
          navItems[0].isActive && "first-active"
        }`}
      >
        <SectionsNav navItems={navItems} setNavItems={setNavItems} />
        <Ellipsis />
      </div>
      <RequestTab />
    </AppLayout>
  );
};

export default Dashboard;
