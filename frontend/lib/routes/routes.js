// @material-ui/icons components
import AccountCircle from "@material-ui/icons/AccountCircle";
import Dns from "@material-ui/icons/Dns";
import FlashOn from "@material-ui/icons/FlashOn";
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
import Grain from "@material-ui/icons/Grain";
import LocationOn from "@material-ui/icons/LocationOn";
import Palette from "@material-ui/icons/Palette";
import Person from "@material-ui/icons/Person";
import Tv from "@material-ui/icons/Tv";
import VpnKey from "@material-ui/icons/VpnKey";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: Tv,
    iconColor: "Primary",
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: Grain,
    iconColor: "Primary",
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    iconColor: "Warning",
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: Person,
    iconColor: "WarningLight",
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: FormatListBulleted,
    iconColor: "Error",
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: VpnKey,
    iconColor: "Info",
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: AccountCircle,
    iconColor: "ErrorLight",
    layout: "/auth",
  },
  {
    divider: true,
  },
  {
    title: "Documentation",
  },
  {
    href: "https://www.creative-tim.com/learning-lab/material-ui/overview/argon-dashboard?ref=admui-admin-sidebar",
    name: "Getting started",
    icon: FlashOn,
  },
  {
    href: "https://www.creative-tim.com/learning-lab/material-ui/colors/argon-dashboard?ref=admui-admin-sidebar",
    name: "Foundation",
    icon: Palette,
  },
  {
    href: "https://www.creative-tim.com/learning-lab/material-ui/alerts/argon-dashboard?ref=admui-admin-sidebar",
    name: "Components",
    icon: Dns,
  },
];
export default routes;
