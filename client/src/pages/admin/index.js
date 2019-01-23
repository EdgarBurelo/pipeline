import React, { Component } from "react";
import { Button, Form, Dropdown, Table, Icon } from 'semantic-ui-react';
import API from "../../utils/API";

const userTypes = [
  
  {text: "Agent", value: "Agent"},
  {text: "Supervisor", value: "Supervisor"}
  
]; 

let newObj = {};

class Admin extends Component {

  constructor(props) {

    super(props);

    this.state = {};

  }

  componentDidMount() {

    this.renderUsers();

  }


  renderUsers = () => {

    API.allUsers().then((data) => {

      let stateArr = data.data;

      this.setState(stateArr);

      console.log(this.state);

    }).catch(err => {

      console.log(err);

    })

  }

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

      <div>

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

      <Table celled striped>
          <Table.Header>

            <Table.Row>
              <Table.HeaderCell colSpan='3'>Users</Table.HeaderCell>
            </Table.Row>
      
            <Table.Row>
      
              <Table.HeaderCell>
                Name
              </Table.HeaderCell>
        
              <Table.HeaderCell>
                Email
              </Table.HeaderCell>
        
              <Table.HeaderCell>
                User Type
              </Table.HeaderCell>
        
            </Table.Row>

          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>
                <Icon name='folder' /> node_modules
              </Table.Cell>

              <Table.Cell>Initial commit</Table.Cell>

              <Table.Cell collapsing textAlign='right'>
                10 hours ago
              </Table.Cell>
            </Table.Row>

          </Table.Body>

      </Table>

      </div>

    )

  }

}

export default Admin