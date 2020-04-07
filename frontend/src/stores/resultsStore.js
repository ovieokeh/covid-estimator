import { derived } from 'svelte/store';

import dataStore from './dataStore';
import regionStore from './regionStore';
import covidEstimator from '../functions/estimator';

const resultStore = derived([dataStore, regionStore], ([$ds, $rs], set) => {
  const data = {
    region: { ...$rs },
    ...$ds,
    population: $rs.population
  };

  const result = covidEstimator(data);
  set(result);

  return () => {
    dataStore.reset();
    regionStore.reset();
  };
});

export default resultStore;
