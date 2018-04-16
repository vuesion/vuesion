import { AppMutations }               from './mutations';
import { AppDefaultState, IAppState } from './state';
import { cloneDeep }                  from 'lodash';

describe('AppMutations', () => {
  let testState: IAppState;

  beforeEach(() => {
    testState = cloneDeep(AppDefaultState);
  });

  test('it should change the locale', () => {
    AppMutations.CHANGE_LOCALE(testState, 'de');
    expect(testState.locale).toBe('de');
  });
});
