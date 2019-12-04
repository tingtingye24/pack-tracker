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
      <div className="col-sm-4 col-md-4 col-lg-4" style={{ padding: "4px" }}>
        {/* <div>  */}

        <Card className="trackingCard">
          {/* style={{ padding: "0", backgroundColor: "beige" }} */}
          <Card.Header style={{display: "flex", backgroundColor: "rgb(123, 218, 184)", padding: '3px'}}>
            <p style={{margin: 'auto', marginLeft: 3}}>{tracking_number}</p>
            <Button
              onClick={() => this.handleClick(id)}
              variant="outline-dark"
              style={{ marginLeft: "auto"}}
            >
              X
            </Button>
          </Card.Header>
          <Card.Img src={logo} style={{ width: "100%", height: "150px", borderWidth: "5px", borderColor: "red" }} />
          <p>---------------------------------------------------</p>
          <Card.Body style={{padding: 0, margin: "10px"}}>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {activities[0]
                ? activities[0].details
                    .split(" ")
                    .splice(0, 5)
                    .join(" ")
                : "Tracking doesn't exist"}
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
    );
  }
}
