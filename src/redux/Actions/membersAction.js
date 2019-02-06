import { getMessages } from '../../data';
import getChatLog from '../../service';

export const SHOW_MEMBERS_SUCCESS = `SHOW_MEMBERS_SUCCESS`;
export const SHOW_MEMBERS_ERROR = `SHOW_MEMBERS_ERROR`;

export const showMembersSuccess = members => {
  return {
      type: SHOW_MEMBERS_SUCCESS,
      members
  }
}

export const showMembersAction = members => {
  let items = [];
  return (dispatch) => {
    getChatLog().then(members => {
      items = members.filter(member =>  !members.includes(member.id) );
      return getMessages()
    })
    .then(messages => {
        const result = messages.map(mes => ({
            messageId: mes.id,
            userId: mes.userId,
            message: mes.message,
            timestamp: mes.timestamp,
            mem: items.shift()
        }))

        const sortedResult = result.sort(function(a,b) { 
            return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime() 
        });
        
        dispatch(showMembersSuccess(sortedResult));
    })
    .catch((error) => {
      dispatch({ type: SHOW_MEMBERS_ERROR });
    })
  }
};