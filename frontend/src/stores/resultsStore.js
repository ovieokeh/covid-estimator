import { derived } from 'svelte/store';

import dataStore from './dataStore';
import covidEstimator from '../../../src/estimator';

const resultStore = derived([dataStore], ([$ds], set) => {
  const result = covidEstimator($ds);
  set(result);

  return () => {
    dataStore.reset();
  };
});

export default resultStore;
