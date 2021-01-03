import { render, RenderResult } from '@testing-library/vue';
import Vuex, { Store } from 'vuex';
import { IState } from '@/interfaces/IState';
import AppDefaultState from '@/store/app/state';
import AppMutations from '@/store/app/mutations';
import AppActions from '@/store/app/actions';
import AppGetters from '@/store/app/getters';
import Error from '@/layouts/error.vue';

describe('error.vue', () => {
  let store: Store<IState>;
  let harness: RenderResult;

  const AppModule = {
    namespaced: true,
    state: () => AppDefaultState(),
    mutations: AppMutations,
    actions: AppActions,
    getters: AppGetters,
  };

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        app: AppModule,
        i18n: {
          namespaced: true,
          state: {
            locale: 'en',
          },
        },
      },
    } as any);

    harness = render(Error, {
      mocks: {
        $nuxt: {
          context: {
            store,
          },
        },
      },
      propsData: {
        error: {
          statusCode: 500,
        },
      },
    });
  });

  test('renders component for error', () => {
    const { getByText } = harness;

    getByText('Error');
  });

  test('renders component for 404', async () => {
    const { getByText, updateProps } = harness;

    await updateProps({
      error: {
        statusCode: 404,
      },
    });

    getByText('404');
  });
});
