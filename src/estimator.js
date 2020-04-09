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

  const currentlyInfected = Math.trunc(getCurrentlyInfected(reportedCases));
  const severeCurrentlyInfected = Math.trunc(getCurrentlyInfected(reportedCases, true));

  const calculateRemainingData = (infected, period) => {
    const infectionsByRequestedTime = Math.trunc(getInfectionsByDay(infected, period));
    const severeCasesByRequestedTime = Math.trunc(getPercentOf(infectionsByRequestedTime, 15));
    const hospitalBedsByRequestedTime = Math.trunc(
      getAvailableHospitalBeds(totalHospitalBeds, 35) - severeCasesByRequestedTime
    );
    const casesForICUByRequestedTime = Math.trunc(getPercentOf(infectionsByRequestedTime, 5));
    const casesForVentilatorsByRequestedTime = Math.trunc(getPercentOf(infectionsByRequestedTime, 2));
    const dollarsInFlight = Math.trunc(getDollarsInFlight(infectionsByRequestedTime, period, region));

    return {
      currentlyInfected: infected,
      infectionsByRequestedTime,
      severeCasesByRequestedTime,
      hospitalBedsByRequestedTime,
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
