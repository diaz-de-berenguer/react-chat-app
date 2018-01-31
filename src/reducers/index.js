import { combineReducers } from "redux";
import messages            from "./messages";
import users               from "./users";

// Reducers are the methods that will ultimately have an effect in the store.
//
// This fild combines the reducer functions 'messages' and 'users' using redux's
// combineReducers. The function chatReducer is sent to the index.js file.
const chatReducer = combineReducers({
	messages,
	users
});

export default chatReducer;
