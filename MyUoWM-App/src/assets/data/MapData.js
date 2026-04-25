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

import { DEPARTMENT_CODES } from "./DepNames";

// Campus identifiers
export const CAMPUSES = {
  KOZANI: "kozani",
  FLORINA: "florina",
  KASTORIA: "kastoria",
  PTOLEMAIDA: "ptolemaida",
};

// Map each department to its campus
export const DEP_CAMPUS_MAP = {
  [DEPARTMENT_CODES.ELECTRICAL_COMPUTER]: CAMPUSES.KOZANI,
  [DEPARTMENT_CODES.MECHANICAL]: CAMPUSES.KOZANI,
  [DEPARTMENT_CODES.CHEMICAL]: CAMPUSES.KOZANI,
  [DEPARTMENT_CODES.MINERAL_RESOURCES]: CAMPUSES.KOZANI,
  [DEPARTMENT_CODES.PRODUCT_SYSTEMS_DESIGN]: CAMPUSES.KOZANI,
  [DEPARTMENT_CODES.ECONOMICS]: CAMPUSES.KOZANI,
  [DEPARTMENT_CODES.ACCOUNTING_FINANCE]: CAMPUSES.KOZANI,
  [DEPARTMENT_CODES.BUSINESS_ADMINISTRATION]: CAMPUSES.KOZANI,
  [DEPARTMENT_CODES.FINE_APPLIED_ARTS]: CAMPUSES.FLORINA,
  [DEPARTMENT_CODES.AGRICULTURE_FORESTRY]: CAMPUSES.FLORINA,
  [DEPARTMENT_CODES.PRIMARY_EDUCATION]: CAMPUSES.FLORINA,
  [DEPARTMENT_CODES.EARLY_CHILDHOOD]: CAMPUSES.FLORINA,
  [DEPARTMENT_CODES.PSYCHOLOGY]: CAMPUSES.FLORINA,
  [DEPARTMENT_CODES.COMMUNICATION_DIGITAL]: CAMPUSES.KASTORIA,
  [DEPARTMENT_CODES.MATHEMATICS]: CAMPUSES.KASTORIA,
  [DEPARTMENT_CODES.INFORMATICS]: CAMPUSES.KASTORIA,
  [DEPARTMENT_CODES.OCCUPATIONAL_THERAPY]: CAMPUSES.PTOLEMAIDA,
  [DEPARTMENT_CODES.MIDWIFERY]: CAMPUSES.PTOLEMAIDA,
};

export const CAMPUS_MAPS = {
  [CAMPUSES.KOZANI]: {
    label_en: "Kozani Campus",
    label_el: "Πανεπιστημιούπολη Κοζάνης",
    // University of Western Macedonia – Kozani (ZEP area)
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.7!2d21.7897!3d40.3006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1359f3b0b5b5b5b5%3A0x1!2sUniversity+of+Western+Macedonia+Kozani!5e0!3m2!1sel!2sgr!4v1700000000000",
    googleMapsUrl: "https://maps.google.com/?q=University+of+Western+Macedonia,+Kozani",
  },
  [CAMPUSES.FLORINA]: {
    label_en: "Florina Campus",
    label_el: "Πανεπιστημιούπολη Φλώρινας",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.7!2d21.4058!3d40.7817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1359f3b0b5b5b5b5%3A0x2!2sUniversity+of+Western+Macedonia+Florina!5e0!3m2!1sel!2sgr!4v1700000000001",
    googleMapsUrl: "https://maps.google.com/?q=University+of+Western+Macedonia,+Florina",
  },
  [CAMPUSES.KASTORIA]: {
    label_en: "Kastoria Campus",
    label_el: "Πανεπιστημιούπολη Καστοριάς",
    // Existing embed from original MapPage
    embedUrl:
      "https://www.google.com/maps/d/u/0/embed?mid=1xjlab_NeXx0zko8xr77Garj0bVh7p-A&ehbc=2E312F&noprof=1",
    googleMapsUrl: "https://maps.google.com/?q=University+of+Western+Macedonia,+Kastoria",
  },
  [CAMPUSES.PTOLEMAIDA]: {
    label_en: "Ptolemaida Campus",
    label_el: "Πανεπιστημιούπολη Πτολεμαΐδας",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.7!2d21.6761!3d40.5122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1359f3b0b5b5b5b5%3A0x4!2sUniversity+of+Western+Macedonia+Ptolemaida!5e0!3m2!1sel!2sgr!4v1700000000003",
    googleMapsUrl: "https://maps.google.com/?q=University+of+Western+Macedonia,+Ptolemaida",
  },
};
