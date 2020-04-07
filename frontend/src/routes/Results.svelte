<script>
  import { onMount } from 'svelte'
  import { navigate } from 'svelte-routing'

  import resultsStore from '../stores/resultsStore'
  import Result from '../components/Result.svelte'

  const { data, impact, severeImpact } = $resultsStore

  const runNew = () => {
    navigate('/')
  }

  onMount(() => window.scrollTo(0, 0))
</script>

<div>
  <h2>Best case scenario</h2>
  <Result data={data} impact={impact} />

  <h2>Worst case scenario</h2>
  <Result data={data} impact={severeImpact} />

  <button on:click="{runNew}">Run another estimate</button>
</div>

<style>
  div {
    width: 90%;
    max-width: 600px;
  }

  button {
    display: block;
    width: 100%;
    padding: 15px 30px;
    color: #fff;
    background-color: #200122;
    border-color: #fff;
    font-size: 1.1em;
    text-transform: uppercase;
    background: linear-gradient(to left, #6f0000, #200122);
    cursor: pointer;
  }
</style>
