import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: []
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    fetch("https://pack-tracker-api.herokuapp.com/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(resp => resp.json())
      .then(data => {
        localStorage.token = data.id;
        this.props.setUser(data);
      })
      .catch(error => alert("Invalid Login.  Please try Again!"));
  };

  createAccount() {
    if (this.props.signup) {
      return <Card.Link href="/signup">Create Account</Card.Link>;
    }
  }

  render() {
    return (
      <div>
        <Card className="account">
          <h1>Log In</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label style={{ margin: "10px" }}>Username</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                name="username"
                placeholder="Username"
                value={this.state.username}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label style={{ margin: "10px" }}>Password</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="password"
                name="password"
                value={this.state.password}
                placeholder="Password"
              />
            </Form.Group>
            {this.createAccount()}
            <Button style={{ margin: "10px" }} variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}
