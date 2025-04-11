const currentYear = new Date().getFullYear();
export const yearsList = Array.from({ length: currentYear - 1970 + 1 }, (_, index) => (1970 + index).toString());
export const projectsYearsList = Array.from({ length: currentYear - 2015 + 1 }, (_, index) => (2015 + index).toString());