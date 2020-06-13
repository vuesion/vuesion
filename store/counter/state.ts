export interface ICounterState {
  incrementPending: boolean;
  decrementPending: boolean;
  count: number;
}

export default (): ICounterState => {
  return {
    incrementPending: false,
    decrementPending: false,
    count: 0,
  };
};
