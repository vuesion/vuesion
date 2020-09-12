import { AppMutations } from '@/store/app/mutations';
import { AppDefaultState, IAppState } from '@/store/app/state';

describe('AppMutations', () => {
  let testState: IAppState;

  beforeEach(() => {
    testState = AppDefaultState();
  });

  test('it should change the theme', () => {
    AppMutations.CHANGE_THEME(testState, 'dark');
    expect(testState.theme).toBe('dark');
  });
});
