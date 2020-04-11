import { writable } from 'svelte/store';

const initialStore = {
  region: {
    name: '',
    population: '',
    avgAge: '',
    avgDailyIncomeInUSD: '',
    avgDailyIncomePopulation: ''
  },
  reportedCases: '',
  totalHospitalBeds: '',
  timeToElapse: '',
  periodType: ''
};

const createDataStore = () => {
  const { subscribe, set } = writable(initialStore);

  return {
    subscribe,
    set,
    reset: () => set(initialStore)
  };
};

export default createDataStore();
