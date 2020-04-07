<script>
  import { fade, fly } from 'svelte/transition';
  export let data, impact;

  const formatNumber = (number) => new Intl.NumberFormat().format(number);

  const confirmedCases = formatNumber(impact.currentlyInfected);
  const estimatedInfections = formatNumber(impact.infectionsByRequestedTime);
  const estimatedHospitalBeds = formatNumber(impact.hospitalBedsByRequestedTime);
  const estimatedICUCases = formatNumber(impact.casesForICUByRequestedTime);
  const estimatedVentilatorDemand = formatNumber(impact.casesForVentilatorsByRequestedTime);
  const estimatedDollarsLost = new Intl.NumberFormat('en-US').format(impact.dollarsInFlight);

  let availableHospitalBeds = '';

  switch (Math.sign(impact.hospitalBedsByRequestedTime)) {
    case 0:
      availableHospitalBeds = 'but there will be no available beds for the patients.';
      break;

    case -1:
      availableHospitalBeds = `but there will be a shortage of available hospital beds by as much as <strong>${formatNumber(
        Math.abs(impact.hospitalBedsByRequestedTime)
      )}</strong> beds.`;
      break;

    default:
      availableHospitalBeds = `with <strong>${estimatedHospitalBeds}</strong> available hospital beds.`;
  }
</script>

<p in:fade="{{ duration: 600 }}">
  There are currently <strong>{confirmedCases}</strong> confirmed cases of COVID-19 in {data.region.name}.
  <br />
  <br />

  In <strong>{data.timeToElapse}</strong> <strong>{data.periodType}</strong>, there will be approximately
  <strong>{estimatedInfections}</strong> confirmed cases {@html availableHospitalBeds}

  <br />
  <br />

  There will also be approximately <strong>{estimatedICUCases}</strong> cases that require intensive care unit (ICU) and
  <strong>{estimatedVentilatorDemand}</strong> cases where the patient will require a ventilator to stay alive.

  <br />
  <br />

  During this same period, the economy will lose approximately
  <strong>${estimatedDollarsLost}</strong> due to the effects of COVID-19.
</p>
