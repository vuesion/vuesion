export interface IVuexExampleState {
  vuexExample: {
    topics: any[],
    error: Error,
  };
}

export interface IVuexExampleMutations {
  TOPICS(state: IVuexExampleState, topics: any[]): void;

  TOPICS_FAILURE(state: IVuexExampleState, error: Error): void;
}

export const VuexExampleDefaultState: IVuexExampleState = {
  vuexExample: {
    topics: [],
    error:  null,
  },
};

export const VuexExampleMutations: IVuexExampleMutations = {
  TOPICS:         (state: IVuexExampleState, topics: any[]) => {
    state.vuexExample.topics = topics;
    state.vuexExample.error = null;
  },
  TOPICS_FAILURE: (state: IVuexExampleState, error: Error) => {
    state.vuexExample.error = error;
  },
};
