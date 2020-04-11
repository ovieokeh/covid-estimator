<script>
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';
  import FaRegCheckCircle from 'svelte-icons/fa/FaRegCheckCircle.svelte';

  import Form from '../components/Form.svelte';
  import dataStore from '../stores/dataStore';

  onMount(() => window.scrollTo(0, 0));

  let name = '';
  let population = '';
  let avgAge = '';
  let avgDailyIncomeInUSD = '';
  let avgDailyIncomePopulation = '';
  let reportedCases = '';
  let totalHospitalBeds = '';
  let timeToElapse = '';
  let periodType = 'days';

  const validPeriodTypes = ['days', 'weeks', 'months'];

  const onSubmit = () => {
    dataStore.set({
      region: {
        name,
        population,
        avgAge,
        avgDailyIncomeInUSD,
        avgDailyIncomePopulation,
      },
      reportedCases,
      totalHospitalBeds,
      timeToElapse,
      periodType,
    });
    navigate('/results');
  };
</script>

<Form onSubmit={onSubmit}>
  <label for="name">Region name*</label>
  <input id="name" data-region-name={name} bind:value={name} required />

  <label for="population">Population of region</label>
  <input id="population" type="number" data-population={population} bind:value={population} />

  <label for="avgAge">Average age</label>
  <input id="avgAge" type="number" step="0.01" data-avg-age={avgAge} bind:value={avgAge} />

  <label for="avgDailyIncomeInUSD">Average daily income (in USD)*</label>
  <input
    id="avgDailyIncomeInUSD"
    type="number"
    step="0.01"
    data-avg-daily-income={avgDailyIncomeInUSD}
    bind:value={avgDailyIncomeInUSD}
    required
  />

  <label for="avgDailyIncomePopulation">Average daily income population*</label>
  <input
    id="avgDailyIncomePopulation"
    type="number"
    step="0.01"
    data-avg-daily-income-population={avgDailyIncomePopulation}
    bind:value={avgDailyIncomePopulation}
    required
  />

  <label for="reportedCases">Reported cases*</label>
  <input
    id="reportedCases"
    type="number"
    data-reported-cases={reportedCases}
    bind:value={reportedCases}
    required
  />

  <label for="totalHospitalBeds">Total hospital beds*</label>
  <input
    id="totalHospitalBeds"
    type="number"
    data-total-hospital-beds={totalHospitalBeds}
    bind:value={totalHospitalBeds}
    required
  />

  <label for="timeToElapse">Time to elapse*</label>
  <input
    id="timeToElapse"
    type="number"
    data-time-to-elapse={timeToElapse}
    bind:value={timeToElapse}
    required
  />

  <label for="periodType">Period type*</label>
  <select id="periodType" data-period-type={periodType} bind:value={periodType}>
    {#each validPeriodTypes as periodType}
    <option value={periodType}>
      {periodType}
    </option>
    {/each}
  </select>

  <button type="submit" data-go-estimate>Submit <FaRegCheckCircle /></button>
</Form>