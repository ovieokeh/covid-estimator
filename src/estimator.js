/* eslint-disable operator-linebreak */
import {
  getNormalisedDays,
  getCurrentlyInfected,
  getInfectionsByDay,
  getPercentOf,
  getAvailableHospitalBeds,
  getDollarsInFlight
} from './utilities';

const covid19ImpactEstimator = (data) => {
  // eslint-disable-next-line object-curly-newline
  const {
    periodType,
    timeToElapse,
    reportedCases,
    totalHospitalBeds,
    region
  } = data;

  const days = getNormalisedDays(periodType, timeToElapse);

  const currentlyInfected = Math.trunc(getCurrentlyInfected(reportedCases));
  const severeCurrentlyInfected = Math.trunc(
    getCurrentlyInfected(reportedCases, true)
  );

  const calculateRemainingData = (infected, period) => {
    const infectionsByRequestedTime = Math.trunc(
      getInfectionsByDay(infected, period)
    );
    const severeCasesByRequestedTime = Math.trunc(
      getPercentOf(infectionsByRequestedTime, 15)
    );
    const hospitalBedsByRequestedTime = Math.trunc(
      getAvailableHospitalBeds(totalHospitalBeds, 35) -
        severeCasesByRequestedTime
    );
    const casesForICUByRequestedTime = Math.trunc(
      getPercentOf(infectionsByRequestedTime, 5)
    );
    const casesForVentilatorsByRequestedTime = Math.trunc(
      getPercentOf(infectionsByRequestedTime, 2)
    );
    const dollarsInFlight = Math.trunc(
      getDollarsInFlight(infectionsByRequestedTime, period, region)
    );

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

  return {
    data,
    impact: calculateRemainingData(currentlyInfected, days),
    severeImpact: calculateRemainingData(severeCurrentlyInfected, days)
  };
};

export default covid19ImpactEstimator;
