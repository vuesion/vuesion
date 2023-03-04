import { acceptHMRUpdate, defineStore } from 'pinia';

export interface ICounterState {
  incrementPending: boolean;
  decrementPending: boolean;
  count: number;
  error: unknown;
}

export const useCounterStore = defineStore('counter', {
  state: (): ICounterState => {
    return {
      incrementPending: false,
      decrementPending: false,
      count: 0,
      error: null,
    };
  },
  getters: {
    getIncrementPending(state) {
      return state.incrementPending;
    },
    getDecrementPending(state) {
      return state.decrementPending;
    },
    getCount(state) {
      return state.count;
    },
    getError(state) {
      return state.error;
    },
  },
  actions: {
    async increment() {
      this.incrementPending = true;

      try {
        const res = await $fetch<{ count: number }>('/api/counter/increment', {
          method: 'PUT',
          body: { count: this.count },
        });

        this.count = res.count;
        this.incrementPending = false;
      } catch (e) {
        this.incrementPending = false;
        this.error = e;
      }
    },
    async decrement() {
      this.decrementPending = true;

      try {
        const res = await $fetch<{ count: number }>('/api/counter/decrement', {
          method: 'PUT',
          body: { count: this.count },
        });

        this.count = res.count;
        this.decrementPending = false;
      } catch (e) {
        this.decrementPending = false;
        this.error = e;
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}
