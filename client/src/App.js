import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Button from "./components/button";
import Action from "./components/Actionbar"
import About from "./components/About";
import Sidebarn from "./components/Sidebar";
import Login from "./pages/login";
import { Container } from "semantic-ui-react";
import ".";
import "./style.css";

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      user:{
        usrname:"",
        password:""
      }
    };

    
  }
  logginclickHandler = event => {
    event.preventDefault();
    console.log(this.state);
  }

   handleInputChange = event => {
     // Getting the value and name of the input which triggered the change
     let value = event.target.value;
     const name = event.target.name;

     if (name === "password") {
       value = value.substring(0, 15);
     }
     // Updating the input's state
     this.setState((previousState) => {
       previousState.user[name] = value;
       return previousState;
     });
     console.log(this.state);
   };

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
            <Route path="/login" render={props => <Login clickHandlerFn={this.logginclickHandler} handleInputChange={this.handleInputChange}/>} />
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
