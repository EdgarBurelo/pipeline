import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from "./components/button";
import Nav from "./components/nav"
import About from "./components/About";

 class App extends Component {
  render() {  
    return (
      <Router>
        <div >
          <Nav />
          <Switch >
            <Route path="/" exact component={Button} />
            <Route path="/about" component={About} />
            
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;
