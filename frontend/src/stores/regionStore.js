import { writable } from 'svelte/store';

const initialStore = {
  name: '',
  population: '',
  avgAge: '',
  avgDailyIncomeInUSD: '',
  avgDailyIncomePopulation: ''
};

const createRegionStore = () => {
  const { subscribe, set, update: u } = writable(initialStore);

  return {
    subscribe,
    update: (field, val) => u((s) => ({ ...s, [field]: val })),
    reset: () => set(initialStore)
  };
};

export default createRegionStore();
