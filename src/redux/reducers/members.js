import { SHOW_MEMBERS_SUCCESS, SHOW_MEMBERS_ERROR } from '../Actions/membersAction';

export const initialState = {
    members: [],
    isShown: false
};
 
const membersReducer = (state = initialState.members, {type, members}) => {

  switch (type) {
      case SHOW_MEMBERS_SUCCESS:
          return members;

      case SHOW_MEMBERS_ERROR:
          console.log('Error - no members fetched');
          return state;

      default:
        return state;
  }
};

export default membersReducer;
