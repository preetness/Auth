import React from 'react';
import { View, Text } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends React.Component {
  render() {
    return (
      <Card>
        <CardSection />
        <CardSection />
        <CardSection>
          <Button buttonText="Log In!" />
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
