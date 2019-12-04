import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";

export default class Signup extends Component {
  state = {
    username: "",
    password_digest: "",
    errors: []
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("https://pack-tracker-api.herokuapp.com/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(resp => resp.json())
      .then(data => {
        if (!data.id) {
          alert(data)
        } else {
          localStorage.token = data.id;
          this.props.setUser(data);
        }
      })
      .catch(error => alert("Invalid Login.  Please try Again!"));
  };

  renderErrors(){
    return this.state.errors.map( error =><p> {error} </p>)
  }

  render() {
    console.log(this.state.username);
    console.log(this.state.password_digest);
    return (
      <div>
        <Card className="account">
          <h1>Sign Up</h1>
          {this.renderErrors()}
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
                type="Password"
                name="password_digest"
                value={this.state.password_digest}
                placeholder="Password"
              />
            </Form.Group>
            <Button style={{ margin: "10px" }} variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}
