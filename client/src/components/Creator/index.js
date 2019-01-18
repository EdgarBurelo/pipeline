import React, { Component } from "react";
import axios from "axios";
import "../Creator/style.css"

class Creator extends Component {
  constructor(props) {
    super(props);
    this.state = {
        flowName: undefined,
        action1: undefined,
        action2: undefined
    }
}



  focusOption = event => {
    event.preventDefault();
    console.log(event.target.getAttribute("data-contact"));
    this.setState({action1: event.target.getAttribute("data-contact")});


  }

  render() {
    return(
      <div class="container">
        <h3>Set up your strategy for:</h3>
        <form>
          <input id="flowName" placeholder="Name your strategy"></input>
          <p>What's your first action?</p>
          <div class="buttonrow"><button className="btn btn-primary action1" data-contact="call" onClick={this.focusOption}>Call</button><button className="btn btn-primary action1">Email</button><button className="btn btn-primary action1">Other</button></div>
        </form>
      </div>
    );
  }

}

export default Creator;