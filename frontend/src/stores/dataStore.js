import { writable } from 'svelte/store';

const initialStore = {
  reportedCases: '',
  totalHospitalBeds: '',
  timeToElapse: '',
  periodType: 'days'
};

const createDataStore = () => {
  const { subscribe, set, update: u } = writable(initialStore);

  return {
    subscribe,
    update: (field, val) => u((store) => ({ ...store, [field]: val })),
    reset: () => set(initialStore)
  };
};

export default createDataStore();
