import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA9vhoQ9TWZ5zUNscp8ZPOTqiItXKVnBJE',
      authDomain: 'authentication-9f550.firebaseapp.com',
      databaseURL: 'https://authentication-9f550.firebaseio.com',
      projectId: 'authentication-9f550',
      storageBucket: 'authentication-9f550.appspot.com',
      messagingSenderId: '400999176963'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
