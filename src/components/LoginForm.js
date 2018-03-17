import React from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends React.Component {
  render() {
    return (
      <Card>
        <CardSection>
          <TextInput style={{ height: 20, width: 100 }} />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button buttonText="Log In!" />
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
