import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import MoreInfoLayover from "../container/MoreInfoLayover";

export default class TrackingCard extends Component {
  handleClick = id => {
    fetch(`http://localhost:3000/trackings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.props.removeTracking(id);
      });
  };

  render() {
    let {
      id,
      name,
      carrier_url,
      tracking_number,
      logo,
      activities
    } = this.props.tracking;

    return (
      <div className='col-sm-4 col-lg-2' style={{ padding: "4px"}}>
      {/* <div>  */}
        <div className="tracking_card">
          <Card
            style={{
              width: "20rem",
              margin: "20px",
              padding: "2px",
              // backgroundImage: `url(${logo})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <Card.Header style={{ padding: "0", backgroundColor: "beige", }}>
              <Button
                onClick={() => this.handleClick(id)}
                variant="outline-dark"
                style={{ float: "right" }}
              >
                X
              </Button>
            </Card.Header>
            <Card.Img src={logo} style={{ width: "100%", height: "150px" }} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {tracking_number}
                <br />
                {activities[0] ? activities[0].details.split(' ').splice(0,5).join(" ") : "Tracking doesn't exist"}
              </Card.Subtitle>
              <MoreInfoLayover activities={activities} />
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.{this.renderActivities()}
              </Card.Text> */}
              <Button variant="dark" href={carrier_url}>
                GO TO Page
              </Button>
              {/* <Card.Link style={{variant: "dark"}}href={carrier_url}>GO TO Page</Card.Link> */}
            </Card.Body>
          </Card>
          </div>
        </div>
    );
  }
}
