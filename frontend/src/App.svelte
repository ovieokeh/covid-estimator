<script>
  import { Router, Route } from 'svelte-routing';

  import Home from './routes/Home.svelte';
  import Results from './routes/Results.svelte';
</script>

<Router>
  <div id="container">
    <h2>2020 Novel COVID-19 Estimator</h2>

    <Route path="/results">
      <Results />
    </Route>

    <Route path="/">
      <Home />
    </Route>
  </div>
</Router>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    padding: 10px 0;
    color: #fff;
    background: linear-gradient(320deg, #6f0000, #200122);
    background-size: 400% 400%;

    -webkit-animation: background-animate 6s ease infinite;
    -moz-animation: background-animate 6s ease infinite;
    animation: background-animate 6s ease infinite;
  }

  h2 {
    text-align: center;
  }

  @-webkit-keyframes background-animate {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
  }
  @-moz-keyframes background-animate {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
  }
  @keyframes background-animate {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
  }
</style>
