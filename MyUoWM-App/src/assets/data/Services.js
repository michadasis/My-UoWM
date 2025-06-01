import i18n from "../../i18n";
import eudoxus from "../../assets/images/eudoxus.png";
import matlab from "../../assets/images/matlab.png";

export const servicesData = [
    {
        tabName: i18n.t("online_services"),
        index: 1,
        services: [
            {
                title: i18n.t("NocSupplies"),
                url: "https://noc.uowm.gr/www/services/",
                imgUrl:
                    "uowm.png",
                style: {
                    objectFit: "contain"
                }
            },
            {
                title: i18n.t("eudoxus"),
                url: "https://eudoxus.gr/",
                imgUrl:
                    eudoxus,
                style: {
                    objectFit: "contain"
                }
            },
            {
                title: i18n.t("Matlab"),
                url: "https://noc.uowm.gr/www/matlab/",
                imgUrl:
                    matlab,
                style: {
                    objectFit: "contain"
                }
            },
        ],
    },
    {
        tabName: i18n.t("University_Benefits"),
        index: 3,
        services: [
            {
                title: i18n.t("Liaison_office"),
                url: "https://career.uowm.gr/",
                imgUrl: "UoWM.png",
                style: {
                    objectFit: "contain"
                }
            },
            {
                title: i18n.t("practice_office"),
                url: "https://www.uowm.gr/ekpaideysi/spoydes/praktiki-askisi/",
                imgUrl:
                    "UoWM.png",
                style: {
                    objectFit: "contain"
                }
            },
            {
                title: i18n.t("graduate_office"),
                url: "https://www.uowm.gr/dioikisi/domes/diktyo-apofoiton/",
                imgUrl:
                    "UoWM.png",
                style: {
                    objectFit: "contain"
                }
            },
            {
                title: i18n.t("erasmus_office"),
                url: "https://www.uowm.gr/dioikisi/domes/grafeio-erasmus/",
                imgUrl: "UoWM.png",
                style: {
                    objectFit: "contain"
                }
            },
            {
                title: i18n.t("Student_Advocate"),
                url: "https://www.uowm.gr/dioikisi/domes/synigoros-toy-foititi-toy-pdm/",
                imgUrl: "UoWM.png",
                style: {
                    objectFit: "contain"
                }
            },
            {
                title: i18n.t("Academic_Advisor"),
                url: "https://cs.uowm.gr/archiki-selida/akadimaikos-symvoylos/",
                imgUrl: "UoWM.png",
                style: {
                    objectFit: "contain"
                }
            },
            {
                title: i18n.t("Complaints_Management"),
                url: "https://cs.uowm.gr/diadikasia-diacheirisis-paraponon/",
                imgUrl: "UoWM.png",
                style: {
                    objectFit: "contain"
                }
            },
        ],
    },
];
