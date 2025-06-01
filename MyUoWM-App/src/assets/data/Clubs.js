import i18n from "../../i18n";
import klsImg from "../images/KLS.png";
import SPFImg from "../images/SPF.png";
import MusicImg from "../images/MusicTeam.png";
export const ClubsData = [
    {
        tabName: i18n.t("student_clubs"),
        index: 1,
        services: [
            {
                title: i18n.t("IEEEStydentBranch"),
                url: "https://www.instagram.com/ieeesbkastoria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukwUoTZ9s227DbAgGLkuuxv9I5G7uYHRvhg&s",
            },
            {
                title: i18n.t("ErasmusStudentClub"),
                url: "https://www.instagram.com/esn.westernmacedonia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
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
                url: "https://www.instagram.com/skf.kastorias?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
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
                url: "https://www.instagram.com/theatriki.kast?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                imgUrl:
                    "UoWM.png",
            },
        ],
    }
];
