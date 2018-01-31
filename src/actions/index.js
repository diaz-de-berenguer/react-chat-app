import * as types from '../constants/ActionTypes'

let nextMessageId = 0;
let nextUserId    = 0;

// Actions are functions that return an object. This object is then sent to the
// store using reducers. All of these actions require to have a type -- this type
// will allow the reducer to determine what part of the store needs to be modified.

export const addMessages = (message, author) => ({
	type: types.ADD_MESSAGE,
	payload: {
		id: nextMessageId++,
		message,
		author
	}
});

export const addUser = name => ({
	type: types.ADD_USER,
	payload: {
		id: nextUserId++,
		name
	}
});

export const messageReceived = (message, author) => ({
	type: types.MESSAGE_RECEIVED,
	payload: {
		id: nextMessageId++
	}
});

export const populateUsersList = users => ({
	type: types.USERS_LIST,
	payload: {
		users
	}
});
