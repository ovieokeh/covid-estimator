<script>
  export let results;

  import { fade } from 'svelte/transition';

  import StatBox from './StatBox.svelte'
  import { formatData, iconMapping } from '../functions/utilities';
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