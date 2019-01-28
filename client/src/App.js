import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Action from "./components/Actionbar"
import About from "./components/About";
import Creator from "./pages/Creator";
import Leads from "./pages/Leads";
import Sidebarn from "./components/Sidebar";
import Login from "./pages/login";
import Admin from "./pages/admin";
import Todo from "./pages/todo";
import { Container } from "semantic-ui-react";
import API from "./utils/API";
import "./style.css";

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      logUser : {},
      userCred:{
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
      //console.log(req.data);
      if(req.data.email) {
        let loggedUser = req.data;
        this.setState(prevState => {
          prevState.logUser = loggedUser;
          prevState.logged = true;
          return prevState;
        });
        //console.log(this.state);
      } 
    });
  }

  logginclickHandler = event => {
    event.preventDefault();
    let evType = event.target.name;
    let username = this.state.userCred.username;
    let password = this.state.userCred.password;
    
    let samePassworFun = () => {
      let samePass = password === this.state.userCred.passwordRep ? true : false;
      return samePass;
    }
    
    
    let isMail = (mail) => {
      let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
      return emailRegex.test(mail);
    }

    let isPassword = (password) => {
      //let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
      let weakRegex = new RegExp("^(?=.*[a-z])");
      return weakRegex.test(password);
    }

    if (isMail(username)) {
      if(isPassword(password)) {
        if(!samePassworFun() && this.state.userCred.passwordRep) {
          console.log("no igual pass");
        } else if(samePassworFun() && this.state.userCred.passwordRep) {
          this.eventHandler(evType, username, password);
        } else {
          this.eventHandler(evType, username, password);
        }
        
      } else{
        console.log("Password Regex Validation");
      }
    } else {
      console.log("Emai Regex validation");
    }
  }

  eventHandler(evType,username,password) {
    switch (evType) {
      case "Login":
        console.log(evType);
        this.loginFunc(username, password);
        break;
      case "Sign":
        console.log(evType);
        this.sigunpFunc(username, password);
        break;
      default:
        console.log("default");
        break;
    }
  }

  loginFunc(username,password) {
    API.login(username, password).then(res => {
      console.log(res);
      let loggedUser = res.data;
      if (res.status === 200) {
        this.setState((prevState) => {
          prevState.logUser = loggedUser;
          prevState.logged = true;
          prevState.userCred = {};
          return prevState;
        });
        console.log("logged in",this.state);
      }
    });
  }

  sigunpFunc(username,password) {
    let name = this.state.userCred.Name;
    let company = this.state.userCred.Company;
    console.log(name,company);

    API.signup(username, password,name,company).then(res => {
      console.log(res);
      if(res.status === 200) {
        this.setState((prevState)=>{
          prevState.logged=true;
          prevState.userCred = {};
          return prevState;
        });
        console.log("signup");
      }
    });
  }

   handleInputChange = event => {
     let value = event.target.value;
     const name = event.target.name;

     if (name === "password") {
       value = value.substring(0, 15);
     }
     // Updating the input's state
     this.setState((previousState) => {
       previousState.userCred[name] = value;
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
              <Route path="/admin" render={props=> <Admin status={this.state.logged} />} />
              <Route path="/leads" component={Leads} />
              <Route path="/todo" component={Todo} />} />
              <Redirect from='/' to='/login' />
            </Switch>
          </div>
        </Container>
      </Router>
    );
  }
}



export default App;
