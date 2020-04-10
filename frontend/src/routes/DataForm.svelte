<script>
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';

  import dataStore from '../stores/dataStore';
  import Form from '../components/Form.svelte';
  import BackButton from '../components/BackButton.svelte';

  const {
    reportedCases,
    totalHospitalBeds,
    timeToElapse,
    periodType
  } = $dataStore;

  const validPeriodTypes = ['days', 'weeks', 'months'];

  const onSubmit = () => {
    navigate('/results');
  };

  const handleInput = event => {
    dataStore.update(event.target.id, Number(event.target.value) || event.target.value);
  };

  onMount(() => window.scrollTo(0, 0));
</script>

<Form key="step-2" onSubmit={onSubmit}>
  <BackButton />

  <label for="reportedCases">Reported cases*</label>
  <input
    id="reportedCases"
    type="number"
    data-reported-cases={reportedCases}
    value={reportedCases}
    on:change={handleInput}
    required
  />

  <label for="totalHospitalBeds">Total hospital beds*</label>
  <input
    id="totalHospitalBeds"
    type="number"
    data-total-hospital-beds={totalHospitalBeds}
    value={totalHospitalBeds}
    on:change={handleInput}
    required
  />

  <label for="timeToElapse">Time to elapse*</label>
  <input
    id="timeToElapse"
    type="number"
    data-time-to-elapse={timeToElapse}
    value={timeToElapse}
    on:change={handleInput}
    required
  />

  <label for="periodType">Period type*</label>
  <select id="periodType" value={$dataStore.periodType} on:change={handleInput}>
    {#each validPeriodTypes as periodType}
    <option value={periodType}>
      {periodType}
    </option>
    {/each}
  </select>

  <button type="submit" data-go-estimate>Submit</button>
</Form>
