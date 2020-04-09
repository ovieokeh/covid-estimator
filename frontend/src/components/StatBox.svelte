<script>
  export let id, icon, number

  const descMapping = {
    infectionsByRequestedTime: 'unconfirmed positive cases',
    hospitalBedsByRequestedTime: 'available hospital beds',
    severeCasesByRequestedTime: 'severe cases',
    casesForICUByRequestedTime: 'patients who will require intensive care',
    casesForVentilatorsByRequestedTime: 'patients who will require a ventilator',
    dollarsInFlight: 'USD lost during this period',
}

</script>

<div>
  <svelte:component this={icon} />

  <p><span>{number}</span> <br /> {descMapping[id]}</p>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  div > :global(svg) {
    width: 50px;
    height: 50px;
  }

  span {
    display: inline-block;
    font-size: 1.1em;
  }

  p {
    text-align: center;
    font-weight: 300;
  }
</style>