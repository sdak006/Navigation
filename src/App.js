import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { CreateStore } from 'redux';
import firebase from 'firebase';
import reducers from '/.reducers';

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
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        )
    }
}

export default App;