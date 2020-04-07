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
  return reportedCases * estimatedFactor;
};

export const getInteger = (number) => {
  let result = number.toString();
  [result] = result.split('.');
  return Number(result);
};

export const getInfectionsByDay = (currentlyInfected, days) => {
  let factor = getInteger(days / 3);
  factor = 2 ** factor;

  return currentlyInfected * factor;
};

export const getPercentOf = (num, percent) => (num * percent) / 100;

export const getAvailableHospitalBeds = (totalBeds, availability) => getPercentOf(totalBeds, availability);

export const getDollarsInFlight = (infectionsByRequestedTime, days, region) =>
  infectionsByRequestedTime * region.avgDailyIncomePopulation * region.avgDailyIncomeInUSD * days;
