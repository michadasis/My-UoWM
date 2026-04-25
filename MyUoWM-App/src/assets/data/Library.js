import { CAMPUSES } from "./MapData";

export const LIBRARIES = {
  [CAMPUSES.KASTORIA]: {
    opening_hours: {
      on_weekdays: { start: "07:00", end: "17:00" },
      on_saturday: { start: null, end: null },
      on_sunday:   { start: null, end: null },
    },
    staff: [
      { name_el: "Μπούρτσος Αθανάσιος", name_en: "Bourtsos Athanasios", role_el: "Βιβλιοθηκονόμος", role_en: "Librarian", email: "abourtsos@uowm.gr" },
      { name_el: "Κωνσταντίνου Βάγια",  name_en: "Konstantinou Vagia",  role_el: "Βιβλιοθηκονόμος", role_en: "Librarian", email: "vkonstantinou@uowm.gr" },
    ],
    phone: "2467440006",
    websiteUrl: "https://library.uowm.gr/?page_id=854",
    catalogUrl: "https://uowm-opac.seab.gr/",
  },

  [CAMPUSES.KOZANI]: {
    opening_hours: {
      on_weekdays: { start: "08:00", end: "20:00" },
      on_saturday: { start: "09:00", end: "14:00" },
      on_sunday:   { start: null, end: null },
    },
    staff: [
      { name_el: "Κεντρική Βιβλιοθήκη Κοζάνης", name_en: "Kozani Central Library", role_el: "Βιβλιοθήκη ΠΔΜ", role_en: "UoWM Library", email: "library@uowm.gr" },
    ],
    phone: "2461056201",
    websiteUrl: "https://library.uowm.gr/",
    catalogUrl: "https://uowm-opac.seab.gr/",
  },

  [CAMPUSES.FLORINA]: {
    opening_hours: {
      on_weekdays: { start: "08:00", end: "18:00" },
      on_saturday: { start: null, end: null },
      on_sunday:   { start: null, end: null },
    },
    staff: [
      { name_el: "Βιβλιοθήκη Φλώρινας", name_en: "Florina Library", role_el: "Βιβλιοθήκη ΠΔΜ", role_en: "UoWM Library", email: "library@uowm.gr" },
    ],
    phone: "2385055101",
    websiteUrl: "https://library.uowm.gr/",
    catalogUrl: "https://uowm-opac.seab.gr/",
  },

  [CAMPUSES.PTOLEMAIDA]: {
    opening_hours: {
      on_weekdays: { start: "08:00", end: "17:00" },
      on_saturday: { start: null, end: null },
      on_sunday:   { start: null, end: null },
    },
    staff: [
      { name_el: "Βιβλιοθήκη Πτολεμαΐδας", name_en: "Ptolemaida Library", role_el: "Βιβλιοθήκη ΠΔΜ", role_en: "UoWM Library", email: "library@uowm.gr" },
    ],
    phone: "2461068050",
    websiteUrl: "https://library.uowm.gr/",
    catalogUrl: "https://uowm-opac.seab.gr/",
  },
};