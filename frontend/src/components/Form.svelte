<script>
  export let onSubmit;

  import { fade } from 'svelte/transition';
</script>

<form on:submit|preventDefault={onSubmit} in:fade="{{ duration: 300 }}">
  <slot></slot>
</form>

<style>
  form {
    width: 90%;
    max-width: 400px;
  }

  form > :global(label) {
    display: block;
    padding-bottom: 10px;
    font-size: 1.1em;
  }

  form > :global(input),
  form > :global(select) {
    width: 100%;
    color: #fff;
    background-color: transparent;
    margin-bottom: 20px;
    padding: 10px;
  }

  form > :global(select > option) {
    background-color: #200122;
  }

  form > :global(select) {
    text-transform: capitalize;
  }

  form > :global(button[type='submit']) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 30px;
    padding: 15px 30px;
    color: #fff;
    background-color: #200122;
    border-color: #fff;
    border-radius: 5px;
    font-size: 1.1em;
    text-transform: uppercase;
    background: linear-gradient(to left, #6f0000, #200122);
    cursor: pointer;
  }

  form > :global(button > svg) {
    width: 25px;
    height: 25px;
    margin-left: 10px;
  }
</style>
