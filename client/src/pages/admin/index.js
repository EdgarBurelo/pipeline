import React, { Component } from "react";
import { Button, Form, Dropdown } from 'semantic-ui-react';
import API from "../../utils/API";

const userTypes = [
  
  {text: "Agent", value: "Agent"},
  {text: "Supervisor", value: "Supervisor"}
  
]; 

let newObj = {};

class Admin extends Component {

  buttonClick = event => {

    event.preventDefault();
  
    console.log(newObj);

    API.newUser(newObj.name, newObj.email, newObj.type);
  
  }

  nameChange = event => {

    event.preventDefault();

    let iName = event.target.value;

    console.log(iName);

    newObj.name = iName;

  }

  emailChange = event => {

    event.preventDefault();

    let iEmail = event.target.value;

    console.log(iEmail);

    newObj.email = iEmail;

  }

  typeChange = event => {

    event.preventDefault();

    let iType = event.target.children[0].innerText;

    console.log(iType);

    newObj.type = iType;

  }

  render() {

    return(

    <Form>
    <Form.Field>
      <label>Full Name</label>
      <input placeholder='Full Name' onChange={this.nameChange}/>
    </Form.Field>
    <Form.Field>
      <label>Email Address</label>
      <input placeholder='Email Address' onChange={this.emailChange}/>
    </Form.Field>
    <Form.Field>
      <label>User Type</label>
      <Dropdown placeholder='Select User Type' selection options={userTypes} onChange={this.typeChange}/>
    </Form.Field>
    <Button type='submit' onClick={this.buttonClick}>Submit</Button>
  </Form>
    )

  }

}

export default Admin