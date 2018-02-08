import * as Api from '../constants/api.js' ;
import ActionTypes from '../constants/actionTypes.js';

export const _login = (data) => {
	return (dispatch) => {
		Api._postCall(data)
			.then(res => {
				dispatch({
					type: ActionTypes.key,
					data: res
				});
			})
			.catch(error => {

			})
	}
}

export const _register = (data) => {
	return (dispatch) => {
		Api._postCall(data)
			.then(res => {
				dispatch({
					type: ActionTypes.key,
					data: res
				});
			})
			.catch(error => {

			})
	}
}

export const _fetchUserInfo = (data) => {
	return (dispatch) => {
		Api._postCall(data)
			.then(res => {
				dispatch({
					type: ActionTypes.key,
					data: res
				});
			})
			.catch(error => {

			})
	}
}

