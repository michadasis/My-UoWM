/*
  MIT License

  Copyright (c) 2024 Open Source UOM

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

*/

import i18n from "../../i18n";
import klsImg from "../images/KLS.png";
import SPFImg from "../images/SPF.png";
import MusicImg from "../images/MusicTeam.png";
import { CAMPUSES } from "./MapData";

export const ClubsData = [
  // ── KASTORIA ─────────────────────────────────────────────────────────
  {
    tabName: i18n.t("student_clubs"),
    campus: CAMPUSES.KASTORIA,
    index: 1,
    services: [
      {
        title: i18n.t("IEEEStydentBranch"),
        url: "https://www.instagram.com/ieeesbkastoria",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukwUoTZ9s227DbAgGLkuuxv9I5G7uYHRvhg&s",
      },
      {
        title: i18n.t("ErasmusStudentClub"),
        url: "https://www.instagram.com/esn.westernmacedonia",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKzQeBx8Zga6TlFdUP-PYbjcq4U2BlKjvnyg&s",
      },
      {
        title: i18n.t("KastoriaLinuxSociaty"),
        url: "https://google.com",
        imgUrl: klsImg,
      },
      {
        title: i18n.t("SyllogosPontiwnKastorias"),
        url: "https://www.instagram.com/spf.kast/",
        imgUrl: SPFImg,
      },
      {
        title: i18n.t("SyllogosKritikwnKastorias"),
        url: "https://www.instagram.com/skf.kastorias",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC0V-Pkpuee_4G6bzkHJwLiLlprh0w4LVyDQ&s",
      },
      {
        title: i18n.t("MousikhOmada"),
        url: "https://www.instagram.com/mousiki_kastorias/",
        imgUrl: MusicImg,
      },
      {
        title: i18n.t("TheatrikhOmada"),
        url: "https://www.instagram.com/theatriki.kast",
        imgUrl: "UoWM.png",
      },
    ],
  },

  // ── KOZANI ───────────────────────────────────────────────────────────
  {
    tabName: i18n.t("student_clubs"),
    campus: CAMPUSES.KOZANI,
    index: 1,
    services: [
      {
        title: i18n.t("ErasmusStudentClub"),
        url: "https://www.instagram.com/esn.westernmacedonia",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKzQeBx8Zga6TlFdUP-PYbjcq4U2BlKjvnyg&s",
      },
      {
        title: i18n.t("IEEEStydentBranch"),
        url: "https://www.instagram.com/ieeesb_uowm_kozani",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukwUoTZ9s227DbAgGLkuuxv9I5G7uYHRvhg&s",
      },
      {
        title: i18n.t("MousikhOmada"),
        url: "https://www.instagram.com/uowm.kozani",
        imgUrl: MusicImg,
      },
    ],
  },

  // ── FLORINA ──────────────────────────────────────────────────────────
  {
    tabName: i18n.t("student_clubs"),
    campus: CAMPUSES.FLORINA,
    index: 1,
    services: [
      {
        title: i18n.t("ErasmusStudentClub"),
        url: "https://www.instagram.com/esn.westernmacedonia",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKzQeBx8Zga6TlFdUP-PYbjcq4U2BlKjvnyg&s",
      },
      {
        title: i18n.t("TheatrikhOmada"),
        url: "https://www.instagram.com/uowm.florina",
        imgUrl: "UoWM.png",
      },
    ],
  },

  // ── PTOLEMAIDA ───────────────────────────────────────────────────────
  {
    tabName: i18n.t("student_clubs"),
    campus: CAMPUSES.PTOLEMAIDA,
    index: 1,
    services: [
      {
        title: i18n.t("ErasmusStudentClub"),
        url: "https://www.instagram.com/esn.westernmacedonia",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKzQeBx8Zga6TlFdUP-PYbjcq4U2BlKjvnyg&s",
      },
    ],
  },
];
