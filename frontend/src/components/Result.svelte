<script>
  export let impact;

  import StatBox from './StatBox.svelte'
  import { fade, fly } from 'svelte/transition';
  import { formatData, iconMapping } from '../functions/utilities';

  $: formattedData = formatData(impact)
  $: results = Object.entries(formattedData).filter(a => a[0] !== 'currentlyInfected')

  $: console.log(results)
</script>

<div in:fade="{{ duration: 600 }}">
  {#each results as result}
    <StatBox id={result[0]} icon={iconMapping[result[0]]} number={result[1]} />
  {/each}
</div>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, auto));
    grid-auto-rows: minmax(120px, auto);
    gap: 20px 40px;
    justify-content: center;
    padding: 20px 0;
    min-height: 400px;
  }
</style>