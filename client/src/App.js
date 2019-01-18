import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Button from "./components/button";
import Action from "./components/Actionbar"
import About from "./components/About";
import Creator from "./components/Creator"
import Sidebarn from "./components/Sidebar";
import Login from "./pages/login";
import { Container } from "semantic-ui-react";
import ".";
import "./style.css";

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false
    };
  }
  
  render() {  
    const logged = this.state.logged;
    //console.log(logged);
  return (
    
      <Router>
        <Container fluid={true} style={{padding:"0px"}}>
          <Sidebarn status={this.state.logged} />
          <div style={{marginLeft:"150px"}}>
            <Action />
            <Switch >
              <Route path="/login" component={Login} />
              <Route path="/about" component={About} />
              <Redirect from='/' to='/login' />
            </Switch>
          </div>
        </Container>
      </Router>
    );
  }
}



export default App;
