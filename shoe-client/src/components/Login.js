import React, { useState } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Container,
} from 'semantic-ui-react';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onChange = (e) => {
    setUserName(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <div style={{ marginTop: '400px' }}>
      {/* <Container> */}
      <Grid style={{ backgroundColor: '#36454f' }} centered columns={2}>
        <Grid.Column>
          <Header as="h2" textAlign="center"></Header>
          <Segment>
            <Form size="large">
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="User Name"
                onChange={(e) => onChange(e)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={(e) => onChange(e)}
              />

              <Button color="blue" fluid size="large">
                Sign In
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
      {/* </Container> */}
    </div>
  );
};

export default Login;
