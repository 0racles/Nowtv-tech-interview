import { initialState } from '../members';
import emailReducer from '../email';
import { showEmailAction } from '../../Actions/emailAction';


describe('emailReducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: 'mystery-meat' };
    const result = emailReducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {
    const result = emailReducer(undefined, {});
    expect(result).toEqual(initialState.isShown);
  });

  it('should show email on SHOW_EMAIL', () => {
    const state = {
      isShown: false,
    };
    const mockAction = showEmailAction(true);
    const result = emailReducer(state, mockAction);
    expect(result).toEqual(true);
  });
});