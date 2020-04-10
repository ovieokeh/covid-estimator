/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */

export const getNormalisedDays = (periodType, days) => {
  switch (periodType) {
    case 'weeks':
      return days * 7;
    case 'months':
      return days * 30;
    default:
      return days;
  }
};

export const getCurrentlyInfected = (reportedCases, isSevere = false) => {
  const estimatedFactor = isSevere ? 50 : 10;
  return Math.trunc(reportedCases * estimatedFactor);
};

export const getInfectionsByDay = (currentlyInfected, days) => {
  let factor = Math.trunc(days / 3);
  factor = 2 ** factor;

  return Math.trunc(currentlyInfected * factor);
};

export const getPercentOf = (num, percent) => Math.trunc((num * percent) / 100);

export const getAvailableHospitalBeds = (totalBeds, availability) =>
  getPercentOf(totalBeds, availability);
