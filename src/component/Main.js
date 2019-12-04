import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="mainTitle">
          <h1>Welcome</h1>
          <h1>To</h1>
          <h1>Pack Tracker</h1>
          <Button variant="dark" href="/trackings">
            Start Tracking
          </Button>
        </div>
      </div>
    );
  }
}
