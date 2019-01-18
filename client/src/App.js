import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from "./components/button";
import Nav from "./components/nav"
import About from "./components/About";
import Creator from "./components/Creator"

 class App extends Component {
  render() {  
  return (
      <Router>
        <div >
          <Nav />
          <Switch >
            <Route path="/" exact component={Button} />
            <Route path="/about" component={About} />
            <Route path="/create" component={Creator} />
            
          </Switch>
          
        </div>
      </Router>
    );
  }
}



export default App;
