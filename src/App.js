import React from 'react';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from "./components/NavBar.js";
import CardContainer from './containers/CardContainer';
import HomeContainer from './containers/HomeContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutContainer from './containers/AboutContainer';
import SignupContainer from './containers/SignupContainer';
import LoginContainer from './containers/LoginContainer';
import ContactContainer from './containers/ContactContainer.js';




class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()

  }
  
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route exact path="/signup" component={SignupContainer}/>
            <Route exact path="/user-entries" component={CardContainer}/>
            <Route exact path="/about" component={AboutContainer}/>
            <Route exact path="/contact" component={ContactContainer}/>
            <Route exact path="/login" component={LoginContainer}/>
          </Switch>
        </div>
      </Router>

    );

  }
}

export default connect(null, { getCurrentUser })(App);
