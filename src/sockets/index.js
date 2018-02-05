// Import the constants as 'types' variable & import the actions from the "actions/"
// folder.
import * as types from '../constants/ActionTypes'
import { addUser, messageReceived, populateUsersList } from '../actions'

// Defining the constant setupSocket as a function with arguements 'dispatch' and
// 'username'.
const setupSocket = (dispatch, username) => {

	console.log(username);

	// Const socket initialised as a WebSocket listening on port 8989
	const socket = new WebSocket('ws://localhost:8989');

	// When a client opens a new socket connection, send the corresponding action type
	// and send the client's username to the server
	socket.onopen = () => {
		socket.send(JSON.stringify({
			type: types.ADD_USER,
			name: username
		}))
	}

	// When a message is sent, handle the different types of actions
	socket.onmessage = (event) => {

		// Parsing the data as JSON
		const data = JSON.parse(event.data)

		switch (data.type) {
			// Event type is Add Message, meaning that a new message was sent to the
			// server. The corresponding action is messageReceived (constants/ActionTypes)
			case types.ADD_MESSAGE:
				dispatch(messageReceived(data.message, data.author));
				break

			// Event type is Add User, meaning that a new user joined the server. The
			// corresponding action is addUser (from constants/ActionTypes)
			case types.ADD_USER:
				dispatch(addUser(data.name));
				break

			// Event type is User List. This is what happens when someone leaves the chat.
			// Corresponding action is to populateUsersList.
			case types.USERS_LIST:
				dispatch(populateUsersList(data.users));
				break

			// If event is none of these, default to break.
			default:
				break
		}
	}

	return socket
}

export default setupSocket
