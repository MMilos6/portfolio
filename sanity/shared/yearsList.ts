const currentYear = new Date().getFullYear();
export const yearsList = Array.from({ length: currentYear - 1970 + 1 }, (_, index) => (1970 + index).toString());