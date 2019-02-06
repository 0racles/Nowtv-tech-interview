import { combineReducers } from 'redux';
import membersReducer from './reducers/members';
import showEmailReducer from './reducers/email';

export default function createReducer() {
  return combineReducers({
    members: membersReducer,
    isShown: showEmailReducer,
  });
}
