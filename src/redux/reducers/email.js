import { SHOW_EMAIL } from '../Actions/emailAction';
import { initialState } from './members';

const showEmailReducer = (state = initialState.isShown, {type, value}) => {

	switch(type) {
		case SHOW_EMAIL:
			return true;

		default:
			return state;
	}
}

export default showEmailReducer;
