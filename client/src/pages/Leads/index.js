import React, { Component } from "react";
import { Button, Form } from 'semantic-ui-react';
import API from "../../utils/API";

class Leads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      phone: undefined
    }
  }

  handleInput = event => {
    console.log(event.target.value);
    console.log(event.target.getAttribute("id"));
    event.preventDefault();
    let toSet = event.target.getAttribute("id");
    this.setState({ [toSet]: event.target.value });
  }

  saveLead = event => {
    event.preventDefault();
    console.log(this.state);
    API.saveLead(this.state);
  }


  render() {
    return (
      <Form>
        <Form.Field>
          <label>First name</label>
          <input id="firstName" placeholder='First name' onChange={this.handleInput} />
        </Form.Field>
        <Form.Field>
          <label>Last name</label>
          <input id="lastName" placeholder='Last name' onChange={this.handleInput} />
        </Form.Field>
        <Form.Field>
          <label>Email Address</label>
          <input id="email" placeholder='Email address' onChange={this.handleInput} />
        </Form.Field>
        <Form.Field>
          <label>Phone number</label>
          <input id="phone" placeholder='1234567890' onChange={this.handleInput} />
        </Form.Field>
        <Button type='submit' onClick={this.saveLead}>Submit</Button>
      </Form>
    );
  };
};

export default Leads;