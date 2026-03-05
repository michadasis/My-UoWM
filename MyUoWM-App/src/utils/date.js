import { menu } from '../assets/data/restaurantMenu';

export const getCurrentWeekKey = () => {
  const { cycleWeeks } = menu;

  // First Monday on or after Sep 8 2025
  const schoolYearStart = new Date(2025, 8, 8); // Sep 8 2025
  const dayOfWeek = schoolYearStart.getDay(); // 0=Sun, 1=Mon...
  const daysUntilMonday = dayOfWeek === 0 ? 1 : (8 - dayOfWeek) % 7;
  const firstMonday = new Date(schoolYearStart);
  firstMonday.setDate(schoolYearStart.getDate() + daysUntilMonday);

  const today = new Date();
  const msPerWeek = 7 * 24 * 60 * 60 * 1000;
  const weeksElapsed = Math.floor((today - firstMonday) / msPerWeek);

  // Clamp to valid range and apply modulo
  const weekInCycle = ((Math.max(0, weeksElapsed) % cycleWeeks) + 1);

  // Safety fallback in case key doesn't exist
  const key = `week${weekInCycle}`;
  return menu[key] ? key : 'week1';
};

export const getPreviousWeekKey = () => {
  const { cycleWeeks } = menu;
  const current = parseInt(getCurrentWeekKey().replace('week', ''), 10);
  const previous = ((current - 2 + cycleWeeks) % cycleWeeks) + 1;
  const key = `week${previous}`;
  return menu[key] ? key : 'week1';
};