import ActionTypes from '../constants/actionTypes';

const intitialState = {
	isLoggedIn: false
}

const UserInfoReducer = (state = intitialState, action) => {
	switch(action.type) {
		case ActionTypes.LOGIN_SUCCESS : 
			return {
				...state,
				isLoggedIn: true
			}
		default:
			return state
	}
}

export default UserInfoReducer;