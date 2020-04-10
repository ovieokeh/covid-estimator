/* eslint-disable operator-linebreak */
import {
  getNormalisedDays,
  getCurrentlyInfected,
  getInfectionsByDay,
  getPercentOf,
  getAvailableHospitalBeds
} from './utilities';

const covid19ImpactEstimator = (data) => {
  // eslint-disable-next-line object-curly-newline
  const { periodType, timeToElapse, reportedCases, totalHospitalBeds } = data;

  const days = getNormalisedDays(periodType, timeToElapse);

  const currentlyInfected = getCurrentlyInfected(reportedCases);
  const severeCurrentlyInfected = getCurrentlyInfected(reportedCases, true);

  const calculateRemainingData = (infected, period) => {
    const infectionsByRequestedTime = getInfectionsByDay(infected, period);
    const severeCasesByRequestedTime = getPercentOf(
      infectionsByRequestedTime,
      15
    );
    const hospitalBedsByRequestedTime = Math.trunc(
      getAvailableHospitalBeds(totalHospitalBeds, 35) -
        severeCasesByRequestedTime
    );

    return {
      currentlyInfected: infected,
      infectionsByRequestedTime,
      severeCasesByRequestedTime,
      hospitalBedsByRequestedTime
    };
  };

  return {
    data,
    impact: calculateRemainingData(currentlyInfected, days),
    severeImpact: calculateRemainingData(severeCurrentlyInfected, days)
  };
};

export default covid19ImpactEstimator;
