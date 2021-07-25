import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from "./components/NavBar.js"
import CardContainer from "./components/CardContainer"
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from './components/HomePage';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <HomePage/>
          <CardContainer/>
        </div>
      </Router>

    );

  }
}

export default connect(null, { getCurrentUser })(App);
