import './index.css';
import React                 from 'react';
import ReactDOM              from 'react-dom';
import App                   from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider }          from 'react-redux';
import { createStore }       from 'redux';
import { addUser, addMessages }           from './actions'

// chatReducer is the Reducer function.
import chatReducer from './reducers';

// The function createStore (imported from 'redux') takes in, as arguements, the
// reducer function chatReducer.
const store = createStore(chatReducer);

store.dispatch(addUser('Me'));
store.dispatch(addUser('Jon'));
store.dispatch(addUser('G'));
store.dispatch(addUser('David'));
// store.dispatch(addMessages("hello", 'David'));
// store.dispatch(addMessages("hello again", 'David'));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();

console.log(store.getState());
