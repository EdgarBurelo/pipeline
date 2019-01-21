import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Action from "./components/Actionbar"
import About from "./components/About";
import Sidebarn from "./components/Sidebar";
import Login from "./pages/login";
import Admin from "./pages/admin";
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
    switch (event.target.name) {
      case "Login":
        console.log(event.target.name);
        break;
      case "Sign":
        console.log(event.target.name);
        break;
      default:
        console.log("default");
        break;
    }
  }

   handleInputChange = event => {
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
              <Route path="/admin" component={Admin} />
              <Redirect from='/' to='/login' />
            </Switch>
          </div>
        </Container>
      </Router>
    );
  }
}



export default App;
