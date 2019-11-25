import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";

export default class TrackingForm extends Component {
  state = {
    carriers: [],
    packageName: "",
    trackingNumber: "",
    carrier: ""
  };

  componentDidMount() {
    fetch("http://localhost:3000/carriers")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          carriers: data
        });
      });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("http://localhost:3000/trackings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: this.state.packageName,
        carrier_id: this.state.carrier,
        user_id: this.props.user.id,
        tracking_number: this.state.trackingNumber
      })
    })
      .then(resp => resp.json())
      .then(data => {
          this.setState({
            packageName: "",
            trackingNumber: "",
            carrier: ""
          })
        return this.props.addTracking(data);
      })
      .catch(err => alert("You must sign in"));
  };
  //

  render() {
    // console.log(this.state.carrier);
    return (
      <div className="form-background">
        <Card style={{margin: "0px 450px", position: "relative", padding: "20px", opacity: "0.9"}}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label style={{  }}>Package Name</Form.Label>
              <Form.Control
              style={{  }}
                onChange={this.handleChange}
                name="packageName"
                placeholder="Package Name"
                value={this.state.packageName}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label style={{ }}>
                Tracking Number
              </Form.Label>
              <Form.Control
              style={{  }}
                onChange={this.handleChange}
                name="trackingNumber"
                placeholder="Tracking Number"
                value={this.state.trackingNumber}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Carrier</Form.Label>
              <Form.Control
              style={{ }}
                as="select"
                name="carrier"
                onChange={this.handleChange}
              >
                <option >Please Select a Carrier</option>
                {this.state.carriers.map(carrier => (
                  <option key={carrier.id} value={carrier.id}>
                    {carrier.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button style={{ margin: "10px" }} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}
