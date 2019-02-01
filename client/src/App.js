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
import Workflows from "./pages/Workflows";
import PassChange from "./pages/passChange";
import { Container } from "semantic-ui-react";
import API from "./utils/API";
import "./style.css";
import LeadsMgr from './pages/LeadsMgr';

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      logUser : {},
      userCred:{
        username:"",
        password:""
      },
      error: []
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
      let emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{1,5}?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm); 
      return emailRegex.test(mail);
    }

    let isPassword = (password) => {
      //let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
      let weakRegex = new RegExp("^(?=.*[a-zA-Z0-9])(?=.{8,})");
      return weakRegex.test(password);
    }
    let error = [];
    if(!isMail(username)) {
      error.push("Enter a valid email address!");
    }
    if(!isPassword(password)) {
      error.push("Your password should be at least 8 characters long!");
    }
    if(!samePassworFun() && this.state.userCred.passwordRep) {
      error.push("The password doesn`t match!");
    }
    if (error.length > 0) {
      this.errorHandlerLog(error);
    } else {
      this.setState(prevState => {
        prevState.error = [];
        return prevState;
      });
      //console.log(this.state);
      this.eventHandler(evType, username, password);
    }
  }

  errorHandlerLog(error) {
    this.setState((prevState) => {
      prevState.error = error;
      return prevState;
    });
    //console.log(this.state);
  }

  eventHandler(evType,username,password) {
    switch (evType) {
      case "Login":
        //console.log(evType);
        this.loginFunc(username, password);
        break;
      case "Sign":
        //console.log(evType);
        this.sigunpFunc(username, password);
        break;
      default:
        console.log("default");
        break;
    }
  }

  loginFunc(username,password) {
    API.login(username, password).then(res => {
      console.log(res.data);
      if (res.data.ans) {
        let loggedUser = res.data.user;
        this.setState((prevState) => {
          prevState.logUser = loggedUser;
          prevState.logged = true;
          prevState.userCred = {};
          return prevState;
        });
        console.log("logged in",this.state);
      } else {
        let error = ["The user credentials doesn't match"];
        this.errorHandlerLog(error);
      }
    });
  }

  sigunpFunc(username,password) {
    let name = this.state.userCred.Name.trim();
    let company = this.state.userCred.Company.trim();
    //console.log(name,company);

    API.signup(username, password,name,company).then(res => {
      console.log(res.data.ans);
      if (res.data.ans) {
        let newUser = res.data.user;
        this.setState((prevState)=>{
          prevState.logUser = newUser;
          prevState.logged=true;
          prevState.userCred = {};
          return prevState;
        });
        console.log("signup", this.state);
      } else {
        let error = ["There is already a user with this email!"];
        this.errorHandlerLog(error);
      }
    });
  }

   handleInputChange = event => {
     let value = event.target.value;
     const name = event.target.name;

     if (name === "password") {
       value = value.substring(0, 15);
     }
     if( name === "username") {
       value = value.toLowerCase();
     }
     // Updating the input's state
     this.setState((previousState) => {
       previousState.userCred[name] = value;
       return previousState;
     });
     //console.log(this.state);
   };

   logoutHandler = event => {
    event.preventDefault();
    API.logout().then((res)=> {
      //console.log(res);
      if(res.data.status === "201") {
        this.setState(prevState => {
          prevState.logged = false;
          prevState.logUser = {};
          return prevState;
        });
      }
    });
   }
  
  render() {  
  return (
      <Router>
        <Container fluid={true} style={{padding:"0px"}}>
          <Sidebarn status={this.state.logged} />
          <div style={{marginLeft:"150px"}}>
            <Action user={this.state.logUser} status={this.state.logged} logoutfn={this.logoutHandler} />
            <Switch >
              <Route path="/login" render={props => <Login status={this.state.logged} error={this.state.error} clickHandlerFn={this.logginclickHandler} handleInputChange={this.handleInputChange}/>} />
              <Route path="/about" component={About} />
              <Route path="/create" component={Creator} />
              <Route path="/admin" render={props=> <Admin status={this.state.logged} />} />
              <Route path="/leads" component={Leads} />
              <Route path="/todo" component={Todo} />} />
              <Route path="/strategies" component={Workflows} />
              <Route path="/manage-leads" component={LeadsMgr} />
              <Route path="/passChange" render={props => <PassChange user={this.state.logUser} status={this.state.logged} />} />
              <Redirect from='/' to='/login' />
            </Switch>
          </div>
        </Container>
      </Router>
    );
  }
}



export default App;
