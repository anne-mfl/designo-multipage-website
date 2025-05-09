import australiaIllust from "assets/shared/desktop/illustration-australia.svg";
import canadaIllust from "assets/shared/desktop/illustration-canada.svg";
import ukIllust from "assets/shared/desktop/illustration-united-kingdom.svg";

import australiaMapMobile from "assets/locations/desktop/image-map-australia.png"
import canadaMapMobile from "assets/locations/desktop/image-map-canada.png"
import ukMapMobile from "assets/locations/desktop/image-map-united-kingdom.png"

import australiaMapTablet from "assets/locations/tablet/image-map-australia.png"
import canadaMapTablet from "assets/locations/tablet/image-map-canada.png"
import ukMapTablet from "assets/locations/tablet/image-map-uk.png"

export const locations = [
  {
    name: "Canada",
    illust: canadaIllust,
    bg_circle_rotation: "rotate-0",
    officename: "Designo Central Office",
    mapMobile: canadaMapMobile,
    mapTablet: canadaMapTablet,
    address: "3886 Wellington Street<br>Toronto, Ontario M9C 3J5",
    phone: "+1 253-863-8967",
    email: "contact@designo.co",
  },
  {
    name: "Australia",
    illust: australiaIllust,
    bg_circle_rotation: "rotate-270",
    officename: "Designo AU Office",
    mapMobile: australiaMapMobile,
    mapTablet: australiaMapTablet,
    address: "19 Balonne Street<br>New South Wales 2443",
    phone: "(02) 6720 9092",
    email: "contact@designo.au",
  },
  {
    name: "United Kingdom",
    illust: ukIllust,
    bg_circle_rotation: "rotate-180",
    officename: "Designo UK Office",
    mapMobile: ukMapMobile,
    mapTablet: ukMapTablet,
    address: "13 Colorado Way<br>Rhyd-y-fro SA8 9GA",
    phone: "078 3115 1400",
    email: "contact@designo.uk",
  },
];