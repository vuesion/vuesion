import { createLocalVue, mount } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import { i18n } from '@shared/plugins/i18n/i18n';
import Counter from './Counter.vue';
import { IState } from '@/app/state';
import { CounterModule } from '../module';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Counter.vue', () => {
  let store: Store<IState>;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        counter: CounterModule,
      },
    } as any);
  });

  test('renders component', () => {
    const wrapper = mount<any>(Counter, {
      store,
      localVue,
      i18n,
      stubs: ['router-link'],
    });

    expect(wrapper.find('h1').text()).toBe('Counter');
  });

  test('should increment and decrement', () => {
    store.dispatch = jest.fn();
    const wrapper = mount<any>(Counter, {
      store,
      localVue,
      i18n,
      stubs: ['router-link'],
    });

    wrapper.vm.increment();
    expect(store.dispatch).toHaveBeenCalledWith(`counter/increment`, undefined);

    wrapper.vm.decrement();
    expect(store.dispatch).toHaveBeenCalledWith(`counter/decrement`, undefined);
  });

  test('dispatches action on the server', () => {
    store.dispatch = jest.fn();

    Counter.prefetch({ store });

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(`counter/increment`);
  });
});
