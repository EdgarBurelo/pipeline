import React, { Component } from "react";
import { Button, Form, Dropdown, Table } from "semantic-ui-react";
import API from "../../utils/API";

const userTypes = [
  { text: "Agent", value: "Agent" },
  { text: "Supervisor", value: "Supervisor" }
];

let newObj = {};

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.stateUsers();
  }

  stateUsers = () => {

    API.allUsers()
      .then(data => {
        let stateArr = data.data;

        this.setState(prevState => {
          prevState.users = stateArr;

          return prevState;
        });

      })
      .catch(err => {
        console.log(err);
      });
  };

  buttonClick = event => {
    
    event.preventDefault();

    console.log(newObj);

    //new user created
    API.newUser(newObj.name, newObj.email, newObj.type).then(()=>{

      this.stateUsers();

    });

  };

  deleteClick = event => {

    event.preventDefault();

    console.log(newObj);

  }

  editClick = event => {

    event.preventDefault();

    console.log(newObj);

    console.log(event.target.parentElement.parentElement);

  }

  nameChange = event => {
    event.preventDefault();

    let iName = event.target.value;

    newObj.name = iName;
  };

  emailChange = event => {
    event.preventDefault();

    let iEmail = event.target.value;

    newObj.email = iEmail;
  };

  typeChange = event => {
    event.preventDefault();

    let iType = event.target.children[0].innerText;

    newObj.type = iType;
  };

  render() {

    let arrRows = this.state.users.map(rows => {

      return (

        <Table.Row key={rows.id}>

          <Table.Cell>

            {rows.id}

          </Table.Cell>

          <Table.Cell>

            {rows.name}

          </Table.Cell>

          <Table.Cell>

            {rows.email}

          </Table.Cell>

          <Table.Cell>

            {rows.profile}

            <Button type="submit" onClick={this.deleteClick}>
              Delete
            </Button>

          </Table.Cell>

        </Table.Row>

      )
      
    });

    return (
      <div>
        <Form>
          <Form.Field>
            <label>Full Name</label>
            <input placeholder="Full Name" onChange={this.nameChange} />
          </Form.Field>

          <Form.Field>
            <label>Email Address</label>
            <input placeholder="Email Address" onChange={this.emailChange} />
          </Form.Field>

          <Form.Field>
            <label>User Type</label>
            <Dropdown
              placeholder="Select User Type"
              selection
              options={userTypes}
              onChange={this.typeChange}
            />
          </Form.Field>
          <Button type="submit" onClick={this.buttonClick}>
            Submit
          </Button>
        </Form>

        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="4">Users</Table.HeaderCell>
            </Table.Row>

            <Table.Row>
              <Table.HeaderCell>#</Table.HeaderCell>

              <Table.HeaderCell>Name</Table.HeaderCell>

              <Table.HeaderCell>Email</Table.HeaderCell>

              <Table.HeaderCell>User Type</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>

            {arrRows}

          </Table.Body>

          
        </Table>
      </div>
    );
  }
}

export default Admin;
