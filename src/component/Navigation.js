import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand
          href="/"
          style={{
            textAlign: "center"
          }}
        >
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/box-package-parcel-logistic-delivery-track-navigation-3-20326.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <h6>Pack Tracker</h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/trackings">Trackings</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              href="/login"
              onClick={() => {
                localStorage.removeItem("token");
              }}
            >
              {localStorage.token ? "Logout" : "Login"}
            </Nav.Link>
            <Nav.Link href="/signup">
              {localStorage.token ? this.props.username : "Sign up"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
