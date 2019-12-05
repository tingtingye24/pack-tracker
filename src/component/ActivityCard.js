import React, { Component } from "react";
import {ListGroup} from 'react-bootstrap'


export default class ActivityCard extends Component {
  render() {
    return (
      <div>
          <ListGroup.Item>
          <p>{"Date: " + this.props.activity.timestamp.slice(0,10) + " Time: " + this.props.activity.timestamp.slice(11, 19)}</p>
        <p>{this.props.activity.details + ", " + this.props.activity.location}</p>
        </ListGroup.Item>
      </div>
    );
  }
}
// "Date: " + timestamp.slice(0,9) + " Time: " + timestamp.slice(11, 19)