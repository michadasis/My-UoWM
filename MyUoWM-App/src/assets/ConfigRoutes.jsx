/*
  MIT License

  Copyright (c) 2022 Open Source  UOM

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  Made by Open Source UoM (https://opensource.uom.gr)

  Project members:
    -Apostolidis
    -Davios
    -Iosifidis
    -Konstantinidis
    -Mpakalis
    -Nasis
    -Omiliades
    -Patsouras
    -Fakidis

*/
import { lazy } from "react";
import {
  DepAnnounceIcon,
  CalendarTimeIcon,
  ExamsTestIcon,
  LaptopTextbookIcon,
  LibraryIcon,
  LocationIcon,
  ManyPeopleIcon,
  MealIcon,
  PCInterfaceIcon,
  PeopleIcon,
  PersonIcon,
  StackedBooksIcon,
  StudentInPCIcon,
} from "./icons";
import i18n from "../i18n";

const ServicesPage = lazy(() => import("../pages/ServicesPage"));
const LibraryPage = lazy(() => import("../pages/LibraryPage"));
const FirstYearInfoPage = lazy(() => import("../pages/FirstYearInfoPage"));
const MapPage = lazy(() => import("../pages/MapPage"));
const StudentCare = lazy(() => import("../pages/StudentCare"));
const RestaurantUniversity = lazy(() => import("../pages/RestaurantUniversity"));
const ClubsPage = lazy(() => import("../pages/ClubsPage"));

export const Categories = [
  {
    title: i18n.t("announcements"),
    iconSVG: <DepAnnounceIcon />,
    route: "https://cs.uowm.gr/category/announcements/",
    span: 2,
    isExternal: true,
    requireSelection: false,
    position: 1,
    hide: false,
    pageComponent: null,
  },
  {
    title: i18n.t("course_schedule"),
    iconSVG: <CalendarTimeIcon />,
    route: "https://cs.uowm.gr/archiki-selida/orologio-programma-mathimaton",
    span: 1,
    isExternal: true,
    requireSelection: false,
    position: 2,
    hide: false,
    pageComponent: null,
  },
  {
    title: i18n.t("StudentPortal"),
    iconSVG: <StudentInPCIcon />,
    route: "https://students.uowm.gr",
    span: 1,
    isExternal: true,
    requireSelection: false,
    position: 3,
    hide: false,
    pageComponent: null,
  },
  {
    title: "Open eClass",
    iconSVG: <LaptopTextbookIcon />,
    route: "https://eclass.uowm.gr/",
    span: 1,
    isExternal: true,
    requireSelection: false,
    position: 4,
    hide: false,
    pageComponent: null,
  },
  {
    title: i18n.t("map"),
    iconSVG: <LocationIcon />,
    route: "/map",
    span: 1,
    isExternal: false,
    requireSelection: false,
    position: 5,
    hide: false,
    pageComponent: MapPage,
  },
  {
    title: i18n.t("foititiki_merimna"),
    iconSVG: <ManyPeopleIcon />,
    route: "/StudentCare",
    span: 1,
    isExternal: false,
    requireSelection: false,
    position: 6,
    hide: false,
    pageComponent: StudentCare,
  },
  {
    title: i18n.t("restaurant"),
    iconSVG: <MealIcon />,
    route: "/RestaurantUniversity",
    span: 2,
    isExternal: false,
    requireSelection: false,
    position: 7,
    hide: false,
    pageComponent: RestaurantUniversity,
  },
  {
    title: i18n.t("library"),
    iconSVG: <LibraryIcon />,
    position: 8,
    hide: false,
    route: "/LibraryPage",
    span: 1,
    isExternal: false,
    requireSelection: false,
    pageComponent: LibraryPage,
  },
  {
    title: i18n.t("Services"),
    iconSVG: <PCInterfaceIcon />,
    route: "/services",
    span: 1,
    isExternal: false,
    requireSelection: false,
    position: 9,
    hide: false,
    pageComponent: ServicesPage,
  },
  {
    title: i18n.t("exams_schedule"),
    iconSVG: <ExamsTestIcon />,
    route: "https://cs.uowm.gr/archiki-selida/programma-spoudwn/programma-exetaseon/",
    isExternal: true,
    span: 1,
    requireSelection: false,
    position: 10,
    hide: false,
    pageComponent: null,
  },
  {
    title: i18n.t("studentClubs"),
    iconSVG: <StackedBooksIcon />,
    route: "/clubs",
    span: 1,
    isExternal: false,
    requireSelection: false,
    position: 11,
    hide: false,
    pageComponent: ClubsPage,
  },
  {
    title: i18n.t("freshmen_guides"),
    iconSVG: <PersonIcon />,
    route: "/firstyearinfo",
    span: 1,
    isExternal: false,
    requireSelection: false,
    position: 12,
    hide: false,
    pageComponent: FirstYearInfoPage,
  },
  {
    title: i18n.t("academic_personnel"),
    iconSVG: <PeopleIcon />,
    route: "https://cs.uowm.gr/archiki-selida/prosopiko/",
    span: 1,
    isExternal: true,
    requireSelection: false,
    position: 13,
    hide: false,
    pageComponent: null,
  },
];
