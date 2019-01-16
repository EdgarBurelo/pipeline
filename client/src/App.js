import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from "./components/button";
import Nav from "./components/nav"
import About from "./components/About";
import Sidebarn from "./components/Sidebar";
import { Container } from "semantic-ui-react";
import ".";
import "./style.css";

 class App extends Component {
  render() {  
  return (
      <Router>
        <Container fluid={true} style={{padding:"0px"}}>
          <Sidebarn />
          <div style={{marginLeft:"150px"}}>
            <Nav />
            <Switch >
              <Route path="/" exact component={Button} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </Container>
      </Router>
    );
  }
}



export default App;
