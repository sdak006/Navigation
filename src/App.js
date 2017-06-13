import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginFrom from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyAKSvW4pt8-0YHlGCxjARZmxm9GI8rbCDo',
			authDomain: 'manager-e807e.firebaseapp.com',
			databaseURL: 'https://manager-e807e.firebaseio.com',
			projectId: 'manager-e807e',
			storageBucket: 'manager-e807e.appspot.com',
			messagingSenderId: '279815132743'
		};

		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<LoginFrom />
			</Provider>
		)
	}
}

export default App;