<script>
  import { navigate } from 'svelte-routing';

  const onClick = () => navigate('/');
</script>

<button on:click="{onClick}">{"< Go back"}</button>

<style>
  button {
    background: transparent;
    width: fit-content;
    padding: 5px 20px;
    border: none;
    padding-left: 0;
    font-size: 1.2em;
    color: #fff;
    opacity: 0.5;
  }
</style>
