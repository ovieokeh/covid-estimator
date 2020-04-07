export const { log } = console;

export const getCurrentlyInfected = (reportedCases, isSevere = false) => {
  const estimatedFactor = isSevere ? 50 : 10;
  return reportedCases * estimatedFactor;
};

export const getInfectionsByDay = (currentlyInfected, days) => {
  let factor = days / 3;
  factor = Number(factor.toString().split('.')[0]);
  factor **= 2;

  return currentlyInfected * factor;
};

export const getInteger = (number) => {
  let result = number.toString();
  [result] = result.split('.');
  return Number(result);
};

export const getPercentOf = (num, percent) => (num * percent) / 100;

export const getAvailableHospitalBeds = (totalBeds, availability) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  getPercentOf(totalBeds, availability);
