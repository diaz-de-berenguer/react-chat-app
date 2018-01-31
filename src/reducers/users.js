import * as types from '../constants/ActionTypes';

// The function 'users' is a reducer. It takes two arguements, the first is the state
// and the second is the action.
const users = (state = [], action) => {
	let { type, payload } = action;

	// Depending on the type of action, the reducer function returns a state
	switch (type) {

		// When the action type is to 'add user', this reducer will return the previous
		// state (an array of users) plus the the new user received by the action.
		case types.ADD_USER:
			return state.concat([{
				name: payload.name,
				id:   payload.id
			}]);

		// For the action type 'users list' the reducer will return the array of users
		// that were sent by the action's payload.
		case types.USERS_LIST:
			return payload.users;

		// Default return value for this reducer is the initial state.
		default:
			return state;
	}
};

export default users;
