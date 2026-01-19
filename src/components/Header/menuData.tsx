import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Minust",
    path: "/me",
    newTab: false,
  },
  {
    id: 2,
    title: "Tehtud tööd",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Maalid",
        path: "/gallery",
        newTab: false,
      },
      {
        id: 42,
        title: "Digimaalid",
        path: "/gallery",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Pood",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Maalid",
        path: "/store",
        newTab: false,
      },
      {
        id: 52,
        title: "Digimaalid",
        path: "/store",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Kontakt",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
