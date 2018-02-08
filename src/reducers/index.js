import {combineReducers} from 'redux';
import UserInfoReducer from './userInfoReducer';

const AllReducers = combineReducers({
	userInfoReducer: UserInfoReducer
})

export default AllReducers;