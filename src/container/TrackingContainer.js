import React, { Component } from "react";
import TrackingCard from "../component/TrackingCard";
import { Row, Modal, Button } from "react-bootstrap";
import TrackingForm from "../component/TrackingForm";
import Login from "../component/Login";

export default class TrackingContainer extends Component {
  state = {
    trackings: [],
    finished: false,
    user: null
  };

  componentDidUpdate() {
    if (this.state.user !== this.props.user) {
      fetch(`https://pack-tracker-api.herokuapp.com/trackings/${this.props.user.id}`)
        .then(resp => resp.json())
        .then(data =>
          this.setState({ trackings: data, user: this.props.user })
        );
    }
  }

  removeTracking = id => {
    let newTrackings = this.state.trackings.filter(
      tracking => tracking.id !== id
    );
    this.setState({
      trackings: newTrackings
    });
  };

  renderTrackings() {
    if (this.state.trackings.length > 0) {
      return this.state.trackings.map(tracking => (
        <TrackingCard
          key={tracking.id}
          tracking={tracking}
          removeTracking={this.removeTracking}
        />
      ));
    } else if (localStorage.token) {
      return (<h1>Please Wait.....</h1>);
    } else {
      return (<h1>Log In Please</h1>);
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTracking = data => {
    this.setState({
      trackings: [...this.state.trackings, data]
    });
  };

  render() {
    return (
      <div>
        <TrackingForm user={this.props.user} addTracking={this.addTracking} />
          <Row>
            {this.renderTrackings()}
          </Row>

          <Modal show={!localStorage.token} size='lg' centered>
  
          <Login setUser={this.props.setUser} signup={true}></Login>
        </Modal>
      </div>
    );
  }
}
