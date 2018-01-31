import * as types from '../constants/ActionTypes';

// The function 'messages' is a reducer. It takes two arguements, the first is the state
// and the second is the action.
const messages = (state = [], action) => {
	let { type, payload } = action

	// This function returns different states depending on what type of action was
	// received.
	switch (type) {

		// When the the action is either 'add message' or 'message received', this
		// function should return the previous state (an array of messages) plus the
		// additional messeage sent by the action.
		case types.ADD_MESSAGE:
		case types.MESSAGE_RECEIVED:
			return state.concat([{
				message: payload.message,
				author:  payload.author,
				id:      payload.id
			}]);

		case types.ADD_USER: {
			return state.concat([{
				message: payload.name + " has joined the chat!",
				author:  "AutoBot",
				id:      payload.id,
				autobot: true
			}]);
		}

		// Default value for this reducer function is to return the initial state.
		default:
			return state;
	}
}

export default messages;
