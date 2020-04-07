<script>
  import { send, receive } from '../functions/crossfade';

  export let onSubmit;
  export let key;
</script>

<form on:submit|preventDefault="{onSubmit}" in:receive="{{ key }}">
  <slot></slot>
</form>

<style>
  form {
    width: 90%;
    max-width: 400px;
  }

  form > :global(label) {
    display: block;
    padding-bottom: 5px;
    font-size: 1.1em;
  }

  form > :global(input),
  form > :global(select) {
    width: 100%;
    color: #fff;
    background-color: transparent;
    margin-bottom: 20px;
  }

  form > :global(select > option) {
    background-color: #200122;
  }

  form > :global(select) {
    text-transform: capitalize;
  }

  form > :global(button[type='submit']) {
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
