import Collections from "@/assets/svgIcons/Collections";
import Create from "@/assets/svgIcons/Create";
import History from "@/assets/svgIcons/History";
import Styles from "@/assets/svgIcons/Styles";

export const routes = Object.freeze({
  BASE_URL: "/",
  CREATE: "/create",
  STYLES: "/styles",
  COLLECTION: "/collections",
  HISTORY: "/history",
});

export const sideNavRoutes = [
  {
    title: "Create",
    route: routes.CREATE,
    icon: <Create />,
  },
  {
    title: "Styles",
    route: routes.STYLES,
    icon: <Styles />,
  },
  {
    title: "Collections",
    route: routes.COLLECTION,
    icon: <Collections />,
  },
  {
    title: "History",
    route: routes.HISTORY,
    icon: <History />,
  },
];
