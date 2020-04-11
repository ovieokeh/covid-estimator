<script>
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';
  import FaCaretRight from 'svelte-icons/fa/FaCaretRight.svelte'

  import regionStore from '../stores/regionStore';
  import Form from '../components/Form.svelte';

  const { name, population, avgAge, avgDailyIncomeInUSD, avgDailyIncomePopulation } = $regionStore;

  const validPeriodTypes = ['days', 'weeks', 'months'];

  const onSubmit = () => {
    navigate('/step-2');
  };

  const handleInput = (event) => {
    let { value } = event.target;
    value = event.target.id === 'name' ? value : Number(value);
    regionStore.update(event.target.id, value);
  };

  onMount(() => window.scrollTo(0, 0));
</script>

<Form key="step-1" onSubmit={onSubmit}>
  <label for="name">Region name*</label>
  <input id="name" data-region-name={name} value={name} on:change={handleInput} required />

  <label for="population">Population of region</label>
  <input id="population" type="number" data-population={population} value={population} on:change={handleInput} />

  <label for="avgAge">Average age</label>
  <input id="avgAge" type="number" step="0.01" data-avg-age={avgAge} value={avgAge} on:change={handleInput} />

  <label for="avgDailyIncomeInUSD">Average daily income (in USD)*</label>
  <input
    id="avgDailyIncomeInUSD"
    type="number"
    step="0.01"
    data-avg-daily-income={avgDailyIncomeInUSD}
    value={avgDailyIncomeInUSD}
    on:change={handleInput}
    required
  />

  <label for="avgDailyIncomePopulation">Average daily income population*</label>
  <input
    id="avgDailyIncomePopulation"
    type="number"
    step="0.01"
    data-avg-daily-income-population={avgDailyIncomePopulation}
    value={avgDailyIncomePopulation}
    on:change={handleInput}
    required
  />

  <button type="submit">Next <FaCaretRight /></button>
</Form>
