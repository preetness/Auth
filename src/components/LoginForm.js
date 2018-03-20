import React from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends React.Component {
  state = { email: '', password: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder={'user@email.com'}
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder={'password'}
            label={'Password'}
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          <Button buttonText="Log In!" />
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
