<script>
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';

  import Result from '../components/Result.svelte';
  import resultsStore from '../stores/resultsStore';
  import { formatNumber } from '../functions/utilities';

  let scenario = 'best';

  $: results = scenario === 'best'
    ? $resultsStore.impact
    : $resultsStore.severeImpact;

  $: setActiveClass = id => (id === scenario) ? `${id} active` : id;

  const { data } = $resultsStore;

  const changeScenario = newScenario => () => { scenario = newScenario; };

  const runNew = () => navigate('/');

  onMount(() => window.scrollTo(0, 0));
</script>

<div>
  <section>
    <button class={setActiveClass('best')} on:click={changeScenario('best')}>Best case scenario</button>
    <button class={setActiveClass('worst')} on:click={changeScenario('worst')}>Worst case scenario</button>
  </section>

  <p>Although there are currently {formatNumber(data.reportedCases)} offically confirmed cases in {data.region.name},
  studies show that there may actually be up to {formatNumber(results.currentlyInfected)} unconfirmed cases.</p>

  <h2>In {data.timeToElapse} {data.periodType}, there will be:</h2>

  <Result impact={results} />

  <button class="alt" on:click={runNew}>Run another estimate</button>
</div>

<style>
  div {
    width: 90%;
    max-width: 600px;
  }

  section {
    display: flex;
    height: 50px;
    margin-bottom: 30px;
  }

  button {
    display: block;
    width: 100%;
    padding: 10px;
    color: #fff;
    background-color: transparent;
    border-color: transparent;
    border-radius: 3px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color ease-out 200ms;
  }

  button.best.active {
    background-color: #006f00;
    transition: background-color ease-in 300ms;
  }

  button.worst.active {
    background-color: #6f0000;
    transition: background-color ease-in 300ms;
  }

  button.alt {
    border-color: #fff;
    background-color: #200122;
    text-transform: uppercase;
    background: linear-gradient(to left, #6f0000, #200122);
  }

  p {
    text-align: center;
  }

  h2 {
    text-align: center;
    font-weight: 300;
  }
</style>
