import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from "./components/NavBar.js"
import CardContainer from './containers/CardContainer';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route } from "react-router-dom";



class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/user-entries" component={CardContainer}/>
        </div>
      </Router>

    );

  }
}

export default connect(null, { getCurrentUser })(App);
