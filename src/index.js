
import React                 from 'react';
import ReactDOM              from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider }          from 'react-redux';
import createSagaMiddleware  from 'redux-saga';

import './index.css';
import App                   from './App';
import registerServiceWorker from './registerServiceWorker';
import setupSocket from './sockets'

// chatReducer is the Reducer function.
import chatReducer from './reducers';
import handleNewMessage from './sagas';
import username from './utils/name';

const sagaMiddleware = createSagaMiddleware();
// The function createStore (imported from 'redux') takes in, as arguements, the
// reducer function chatReducer.
const store = createStore(
	chatReducer,
	applyMiddleware(sagaMiddleware)
);

const socket = setupSocket(store.dispatch, username);

sagaMiddleware.run(handleNewMessage, { socket, username });

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();

console.log(store.getState());
