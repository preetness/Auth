import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA9vhoQ9TWZ5zUNscp8ZPOTqiItXKVnBJE',
      authDomain: 'authentication-9f550.firebaseapp.com',
      databaseURL: 'https://authentication-9f550.firebaseio.com',
      projectId: 'authentication-9f550',
      storageBucket: 'authentication-9f550.appspot.com',
      messagingSenderId: '400999176963'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={styles.buttonStyles}>
            <Button
              onPress={() => firebase.auth().signOut()}
              buttonText="Log Out"
            />
          </View>
        );

      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.spinnerStyles}>
            <Spinner size="large" />;
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <View>{this.renderContent()}</View>
      </View>
    );
  }
}

const styles = {
  buttonStyles: {
    flexDirection: 'row',
    marginTop: 45
  },
  spinnerStyles: {
    marginTop: 55
  }
};

export default App;
