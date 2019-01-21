import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Action from "./components/Actionbar"
import About from "./components/About";
import Sidebarn from "./components/Sidebar";
import Login from "./pages/login";
import { Container } from "semantic-ui-react";
import API from "./utils/API";
import "./style.css";

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      user:{
        username:"",
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
        API.login();
        break;
      case "Sign":
        console.log(event.target.name);
        
        let username = this.state.user.username;
        let password = this.state.user.password;
        console.log(username,password);
        API.signup(username,password);
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
              <Redirect from='/' to='/login' />
            </Switch>
          </div>
        </Container>
      </Router>
    );
  }
}



export default App;
