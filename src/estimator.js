import {
  getNormalisedDays,
  getCurrentlyInfected,
  getInfectionsByDay
} from './utilities';

const covid19ImpactEstimator = (data) => {
  const { periodType, timeToElapse, reportedCases } = data;

  const days = getNormalisedDays(periodType, timeToElapse);

  const currentlyInfected = getCurrentlyInfected(reportedCases);
  const severeCurrentlyInfected = getCurrentlyInfected(reportedCases, true);

  const calculateRemainingData = (infected, period) => {
    const infectionsByRequestedTime = getInfectionsByDay(infected, period);

    return {
      currentlyInfected: infected,
      infectionsByRequestedTime
    };
  };

  return {
    data,
    impact: calculateRemainingData(currentlyInfected, days),
    severeImpact: calculateRemainingData(severeCurrentlyInfected, days)
  };
};

export default covid19ImpactEstimator;
