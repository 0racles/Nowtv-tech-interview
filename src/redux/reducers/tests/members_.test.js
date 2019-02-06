import { initialState } from '../members';
import membersReducer from '../members';
import { showMembersAction } from '../../Actions/membersAction';

describe('membersReducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: 'mystery-meat' };
    const result = membersReducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = membersReducer(undefined, mockAction);
    expect(result).toEqual(initialState.members);
  });

  it('should add items on SHOW_MEMBERS_SUCCESS', () => {
    const state = {
      members: []
    };
    return new Promise(resolve => setTimeout(resolve, 4000))
    const mockAction = showMembersAction({ id: 1, content: 'first' }, { id: 2, content: 'second' });
    const result = membersReducer(state, mockAction);
    expect(result.members).toHaveLength(2);
    expect(result.members[0].id).toEqual(1);
    expect(result.members[1].content).toEqual('second');
  });
});
