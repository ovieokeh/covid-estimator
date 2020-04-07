/* eslint-disable max-len */

import {
  getNormalisedDays,
  getCurrentlyInfected,
  getInfectionsByDay,
  getPercentOf,
  getAvailableHospitalBeds,
  getDollarsInFlight
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
  // eslint-disable-next-line object-curly-newline
  const { periodType, reportedCases, totalHospitalBeds, timeToElapse, region } = data;

  const days = getNormalisedDays(periodType, timeToElapse);

  const currentlyInfected = getCurrentlyInfected(reportedCases);
  const severeCurrentlyInfected = getCurrentlyInfected(reportedCases, true);

  const calculateRemainingData = (infected, period) => {
    const infectionsByRequestedTime = getInfectionsByDay(infected, period);
    const severeCasesByRequestedTime = getPercentOf(infectionsByRequestedTime, 15);
    const hospitalBedsByRequestedTime = getAvailableHospitalBeds(totalHospitalBeds, 35) - severeCasesByRequestedTime;
    const casesForICUByRequestedTime = getPercentOf(infectionsByRequestedTime, 5);
    const casesForVentilatorsByRequestedTime = getPercentOf(infectionsByRequestedTime, 2);
    const dollarsInFlight = getDollarsInFlight(infectionsByRequestedTime, period, region);

    return {
      currentlyInfected: infected,
      infectionsByRequestedTime,
      severeCasesByRequestedTime,
      hospitalBedsByRequestedTime,
      calculateRemainingData,
      casesForICUByRequestedTime,
      casesForVentilatorsByRequestedTime,
      dollarsInFlight
    };
  };

  const impactData = calculateRemainingData(currentlyInfected, days);
  const severeImpactData = calculateRemainingData(severeCurrentlyInfected, days);

  return {
    data,
    impact: impactData,
    severeImpact: severeImpactData
  };
};

export default covid19ImpactEstimator;
