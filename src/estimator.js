import {
  getCurrentlyInfected,
  getInfectionsByDay,
  getPercentOf,
  getAvailableHospitalBeds,
  getInteger,
  log
} from './utilities';

const inputData = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};

const covid19ImpactEstimator = (data = inputData) => {
  const { reportedCases, totalHospitalBeds } = data;

  const currentlyInfected = getCurrentlyInfected(reportedCases);
  const xCurrentlyInfected = getCurrentlyInfected(reportedCases, true);

  const infectionsByRequestedTime = getInfectionsByDay(currentlyInfected, 28);
  const xInfectionsByRequestedTime = getInfectionsByDay(xCurrentlyInfected, 28);

  const severeCasesByRequestedTime = getPercentOf(infectionsByRequestedTime, 15);
  const xSevereCasesByRequestedTime = getPercentOf(xInfectionsByRequestedTime, 15);

  // eslint-disable-next-line max-len
  const hospitalBedsByRequestedTime = getAvailableHospitalBeds(totalHospitalBeds, 35) - severeCasesByRequestedTime;
  // eslint-disable-next-line max-len
  const xHospitalBedsByRequestedTime = getAvailableHospitalBeds(totalHospitalBeds, 35) - xSevereCasesByRequestedTime;

  log(getInteger(hospitalBedsByRequestedTime));

  const impact = { currentlyInfected, infectionsByRequestedTime, hospitalBedsByRequestedTime };
  const severeImpact = {
    currentlyInfected: xCurrentlyInfected,
    infectionsByRequestedTime: xInfectionsByRequestedTime,
    hospitalBedsByRequestedTime: xHospitalBedsByRequestedTime
  };

  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
