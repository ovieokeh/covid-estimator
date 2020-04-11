/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */

import FaBiohazard from 'svelte-icons/fa/FaBiohazard.svelte';
import FaHeartbeat from 'svelte-icons/fa/FaHeartbeat.svelte';
import FaHeartBroken from 'svelte-icons/fa/FaHeartBroken.svelte';
import FaProcedures from 'svelte-icons/fa/FaProcedures.svelte';
import FaClinicMedical from 'svelte-icons/fa/FaClinicMedical.svelte';
import FaChargingStation from 'svelte-icons/fa/FaChargingStation.svelte';
import FaDollarSign from 'svelte-icons/fa/FaDollarSign.svelte';

export const iconMapping = {
  currentlyInfected: FaBiohazard,
  infectionsByRequestedTime: FaHeartbeat,
  severeCasesByRequestedTime: FaHeartBroken,
  hospitalBedsByRequestedTime: FaProcedures,
  casesForICUByRequestedTime: FaClinicMedical,
  casesForVentilatorsByRequestedTime: FaChargingStation,
  dollarsInFlight: FaDollarSign
};

export const formatPeriodType = (periodType, period) => {
  let result = periodType.replace(/^\w/, (c) => c.toUpperCase());

  if (period === 1) {
    result = [...result];
    result.pop();
    result = result.join('');
  }

  return result;
};

export const formatNumber = (number) => new Intl.NumberFormat().format(number);

export const formatData = (impact) => ({
  currentlyInfected: impact.currentlyInfected,
  infectionsByRequestedTime: formatNumber(impact.infectionsByRequestedTime),
  hospitalBedsByRequestedTime: formatNumber(impact.hospitalBedsByRequestedTime),
  severeCasesByRequestedTime: formatNumber(impact.severeCasesByRequestedTime),
  casesForICUByRequestedTime: formatNumber(impact.casesForICUByRequestedTime),
  casesForVentilatorsByRequestedTime: formatNumber(
    impact.casesForVentilatorsByRequestedTime
  ),
  dollarsInFlight: new Intl.NumberFormat('en-US', {
    minimumSignificantDigits: 2
  }).format(impact.dollarsInFlight)
});
