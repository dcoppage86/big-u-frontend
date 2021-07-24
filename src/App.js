import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from "./components/NavBar.js"
import MainContainer from "./components/MainContainer.js"
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <MainContainer />
        </div>
      </Router>

    );

  }
}

export default connect(null, { getCurrentUser })(App);
