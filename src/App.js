import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./component/Navigation";
import { Switch, Route } from "react-router-dom";
import Main from './component/Main'
import TrackingContainer from "./container/TrackingContainer";
import Login from "./component/Login";
import Signup from './component/Signup'


class App extends Component {
  
  state = {
    user: ""
  };
  // hello 
  componentDidMount() {
    if (localStorage.token) {
      fetch(REACT_API_BASE+`users/${localStorage.token}`)
        .then(resp => resp.json())
        .then(data =>
          this.setState({
            user: data
          })
        );
    }
  }

  setUser = data => {
    console.log(data)
    this.setState(
      {
        user: data
      },
      () => {
        data.username
          ? this.props.history.push("/")
          : this.props.history.push("/signup");
      }
    );
  };

  

  render() {
    require('dotenv').config()
    return (
      <div> 
        <Navigation username={this.state.user.username}/>
        <div className="background">
        <Switch>
          <Route
            exact
            path="/trackings"
            render={routerProps => <TrackingContainer user={this.state.user} setUser={this.setUser} />}
          />
          <Route
            exact path="/login"
            render={routerProps => <Login setUser={this.setUser} />}
          />
          <Route path="/signup" render={routerProps => <Signup setUser={this.setUser}/>} />
          <Route path="/" render={routerProps => <Main/>}/> 
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
