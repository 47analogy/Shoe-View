import React, { useState } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Container,
} from 'semantic-ui-react';

import axios from 'axios';

const URL = 'http://localhost:5000' || 'https://shoe-view.herokuapp.com';

const Login = (props) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // TODO: user message - failed login
  const submitLogin = (e) => {
    console.log(userName, email, password);
    e.preventDefault();
    axios
      .post(`${URL}/api/signin`, {
        userName: userName,
        email: email,
        password: password,
      })
      .then((res) => {
        props.history.push('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ marginTop: '400px' }}>
      {/* <Container> */}
      <Grid style={{ backgroundColor: '#36454f' }} centered columns={2}>
        <Grid.Column>
          <Header as="h2" textAlign="center"></Header>
          <Segment>
            <Form size="large" onSubmit={submitLogin}>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="User Name"
                onChange={(e) => setUserName(e.target.value)}
              />
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button color="blue" fluid size="large" type="submit">
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
