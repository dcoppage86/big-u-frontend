import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from "./components/NavBar.js"
import CardContainer from './containers/CardContainer';
import HomeContainer from './containers/HomeContainer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutContainer from './containers/AboutContainer';
import Signup from './components/SignUp';



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
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/user-entries" component={CardContainer}/>
            <Route exact path="/about" component={AboutContainer}/>
        </div>
      </Router>

    );

  }
}

export default connect(null, { getCurrentUser })(App);
