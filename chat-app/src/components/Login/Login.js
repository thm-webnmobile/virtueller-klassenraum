import React from "react";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const Login = () => {

    return (
      <Container>
      <Form>
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter username" />
      </Form.Group>
      <Form.Group controlId="formBasicCode">
        <Form.Label>Code</Form.Label>
        <Form.Control type="code" placeholder="Enter group code" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enter Group
      </Button>
    </Form>
    </Container>
    );
};

export default Login;