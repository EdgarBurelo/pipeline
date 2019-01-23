import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Action from "./components/Actionbar"
import About from "./components/About";
import Creator from "./pages/Creator";
import Leads from "./pages/Leads";
import Sidebarn from "./components/Sidebar";
import Login from "./pages/login";
import Admin from "./pages/admin";
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
  componentDidMount() {
    this.logginReview();
  }

  logginReview() {
    API.userStatus().then((req,res)=>{
      console.log(req);
    });
  }
  logginclickHandler = event => {
    event.preventDefault();
    let username = this.state.user.username;
    let password = this.state.user.password;
    switch (event.target.name) {
      case "Login":
        console.log(event.target.name);
        API.login(username, password).then(res => {
          console.log(res);
          if (res.status === 200) {
            this.setState((prevState) => {
              prevState.logged = true;
              return prevState;
            });
            console.log("a");
          }
        });
        break;
      case "Sign":
        console.log(event.target.name);
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

   logoutHandler = event => {
    event.preventDefault();
    API.logout();
   }
  
  render() {  
  return (
      <Router>
        <Container fluid={true} style={{padding:"0px"}}>
          <Sidebarn status={this.state.logged} />
          <div style={{marginLeft:"150px"}}>
            <Action />
            <Switch >
              <Route path="/login" render={props => <Login clickHandlerFn={this.logginclickHandler} handleInputChange={this.handleInputChange}/>} />
              <Route path="/about" component={About} />
              <Route path="/create" component={Creator} />
              <Route path="/admin" component={Admin} />
              <Route path="/leads" component={Leads} />
              <Redirect from='/' to='/login' />
            </Switch>
          </div>
        </Container>
      </Router>
    );
  }
}



export default App;
