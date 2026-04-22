export const RESTAURANT_HOURS = {
  for_lunch: {
    on_weekdays: {
      start: {
        hours: 12,
        minutes: 0,
      },
      end: {
        hours: 15,
        minutes: 30,
      },
    },
    on_weekend: {
      start: {
        hours: 13,
        minutes: 0,
      },
      end: {
        hours: 15,
        minutes: 30,
      },
    },
  },
  for_dinner: {
    on_weekdays: {
      start: {
        hours: 18,
        minutes: 0,
      },
      end: {
        hours: 21,
        minutes: 0,
      },
    },
    on_weekend: {
      start: {
        hours: 18,
        minutes: 0,
      },
      end: {
        hours: 20,
        minutes: 0,
      },
    },
  },
  for_breakfast: {
    on_weekdays: {
      start: {
        hours: 8,
        minutes: 0,
      },
      end: {
        hours: 9,
        minutes: 30,
      },
    },
    on_weekend: {
      start: {
        hours: 9,
        minutes: 0,
      },
      end: {
        hours: 10,
        minutes: 0,
      },
    },
  },
};

export const schedule = {
  weekdays: {
    breakfast: { start: "08:00", end: "09:30" },
    lunch: { start: "12:30", end: "15:30" },
    dinner: { start: "18:00", end: "20:00" },
  },
  weekendsAndHolidays: {
    breakfast: { start: "08:00", end: "09:30" },
    lunch: { start: "13:00", end: "15:30" },
    dinner: { start: "18:00", end: "20:00" },
  },
};

// helpers
function pad(n) {
  return n < 10 ? `0${n}` : `${n}`;
}

function formatISO(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )}`;
}

function addDays(date, days) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  d.setUTCDate(d.getUTCDate() + days);
  return d;
}

/**
 * Calculation of Orthodox Easter for the year
 * This uses an algorithm that calculates the Julian calendar date
 * and then converts to the Gregorian calendar by adding the current offset (13 days)
 */
function orthodoxEaster(year) {
  const a = year % 19;
  const b = year % 4;
  const c = year % 7;
  const d = (19 * a + 15) % 30;
  const e = (2 * b + 4 * c - d + 34) % 7;
  const month = Math.floor((d + e + 114) / 31); // 3=March, 4=April (in Julian)
  const day = ((d + e + 114) % 31) + 1;

  const julianDate = new Date(Date.UTC(year, month - 1, day));

  // the offset is 13 days
  return addDays(julianDate, 13);
}

/**
 * Return an array of hoilday dates (ISO YYYY-MM-DD) for the year
 */
export function getHolidays(year) {
  const result = new Set();

  const fixed = [
    `${year}-01-01`,
    `${year}-01-06`,
    `${year}-03-25`,
    `${year}-05-01`,
    `${year}-08-15`,
    `${year}-10-28`,
    `${year}-11-11`,  // for Kastoria specifically
    `${year}-12-25`,
    `${year}-12-26`,
  ];

  fixed.forEach((d) => result.add(d));

  const easter = orthodoxEaster(year);
  const cleanMonday = addDays(easter, -48);
  const goodFriday = addDays(easter, -2);
  const holySaturday = addDays(easter, -1);
  const easterMonday = addDays(easter, 1);
  const pentecostSunday = addDays(easter, 49);
  const pentecostMonday = addDays(easter, 50);

  [
		cleanMonday,
		goodFriday,
		holySaturday,
		easter,
		easterMonday,
		pentecostSunday,
		pentecostMonday,
  ].forEach((dt) => {
		if (dt.getFullYear() === year) result.add(formatISO(dt));
  });
  return Array.from(result).sort().filter(Boolean);
}

export const holidays = getHolidays(new Date().getFullYear());
