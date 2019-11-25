import React, { Component } from "react";
import {ListGroup} from 'react-bootstrap'


export default class ActivityCard extends Component {
  render() {
    return (
      <div>
          <ListGroup.Item>
          <p>{this.props.activity.timestamp}</p>
        <p>{this.props.activity.details + ", " + this.props.activity.location}</p>
        </ListGroup.Item>
      </div>
    );
  }
}
