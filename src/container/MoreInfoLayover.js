import React, { Component } from "react";
import { Button, Modal, ListGroup } from "react-bootstrap";
import ActivityCard from "../component/ActivityCard";

export default class MoreInfoLayover extends Component {
  state = {
    show: false
  };

  handleModal = event => {
    this.setState({
      show: !this.state.show
    });
  };

  renderActivities() {
    return this.props.activities.map((activity,index) => (
      <ActivityCard key ={index} activity={activity} />
    ));
  }
  render() {
    return (
      <>
        <Button variant="dark" onClick={this.handleModal}>
          More Info
        </Button>

        <Modal show={this.state.show} onHide={this.handleModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>More Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>{this.renderActivities()}</ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
