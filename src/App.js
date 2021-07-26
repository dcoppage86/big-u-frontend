import React from 'react';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from "./components/NavBar.js"
import CardContainer from './containers/CardContainer';
import HomeContainer from './containers/HomeContainer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutContainer from './containers/AboutContainer';
import SignupContainer from './containers/SignupContainer';
import LoginContainer from './containers/LoginContainer'



class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
            <Route exact path="/" component={HomeContainer}/>
            <Route exact path="/signup" component={SignupContainer}/>
            <Route exact path="/user-entries" component={CardContainer}/>
            <Route exact path="/about" component={AboutContainer}/>
            <Route exact path="/login" component={LoginContainer}/>
        </div>
      </Router>

    );

  }
}

export default connect(null, { getCurrentUser })(App);
