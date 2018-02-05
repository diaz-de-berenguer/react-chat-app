console.log('\n\nRunning Server!')

// Define WebSocket using ws library
const WebSocket = require('ws');

// Initialise wss as a new Websocket Server running in port 8989
const wss = new WebSocket.Server({ port: 8989 })

// Array of users currently logged in. Serves as the Database.
const users = []

// Define the function 'broadcast' that will send data to each and every client that
// is currently connected to wss (ie. the websocket server running in port 8989)
const broadcast = (data, webSocket) => {

	// Loops through all the clients that have an Open Websocket (excluding current
	// client) and sends them a stringified version of the JSON data that was passed
	// in as an arguement to the broadcast function.
	wss.clients.forEach( (c) => {
		if (c.readyState === WebSocket.OPEN && c !== webSocket) {
			c.send(JSON.stringify(data));
		};
	})
}

// This is the code that will run on the server when a new client is connected to
// the web socket server.
wss.on('connection', (webSocket) => {
	let currentUserIndex;

	// There's two messages (ie. there's two actions) that the server needs to be able
	// to broadcast. 1) When a new user connects. 2) When a new message is sent.
	webSocket.on('message', (message) => {
		let data = JSON.parse(message);

		switch (data.type) {

			// This case handles what needs to happen in the server when a new user is
			// added
			case 'ADD_USER': {

				// First we find the length of the array of users, set it to currentUserIndex
				currentUserIndex = users.length;

				// Then we add the new user to the array of users. Sends the name and sets
				// an ID (need a better way to set ID, btw)
				users.push({
					name: data.name,
					id:   currentUserIndex + 1
				});

				// Now we need to let the current user about the new user list, as well as
				// broadcast to all connections that the user list has been updated.
				webSocket.send(JSON.stringify({
					type: 'USERS_LIST',
					users
				}));

				broadcast({
					type: 'USERS_LIST',
					users
				}, webSocket);
				break
			}

			// This case handles what should happen when a new message is published.
			case 'ADD_MESSAGE':

				// Add that needs to happen is to broadcast to all users that a message was
				// published. The broadcast function skips the current user, it's instead
				// handled by the front end.
				broadcast({
					type:    'ADD_MESSAGE',
					message: data.message,
					author:  data.author
				}, webSocket);
				break

			default:
				break
		}
	});

	// When the connection is closed, then the new users list needs to be sent to all
	// connected users (ie. broadcast) so they can update their Online Users list.
	webSocket.on('close', () => {

		// Remove User from 'database'
		users.splice(currentUserIndex, 1);

		// Send updated user list to all the connected users
		broadcast({
			type: 'USERS_LIST',
			users
		}, webSocket);
	})
});
