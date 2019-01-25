import React, { Component } from "react";
import { Button, Form, Dropdown, Table, Container } from "semantic-ui-react";
import API from "../../utils/API";
import NotLogged from "../../components/notLogged";

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

            {rows.name}

          </Table.Cell>

          <Table.Cell>

            {rows.email}

          </Table.Cell>

          <Table.Cell>

            {rows.profile}

          </Table.Cell>

        </Table.Row>

      )
      
    });
    let isItLog = () => {
      console.log(this.props.status);
      let loggedStatus = this.props.status;
      if(loggedStatus) {
        return(
          <div>
            <Form style={{ paddingTop: "10px" }}>
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
                  <Table.HeaderCell colSpan="3">Users</Table.HeaderCell>
                </Table.Row>

                <Table.Row>
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
      } else {
        return(<NotLogged />)
      }
    }
    
    return (
      <Container>

        {isItLog()}
      </Container>
    );
  }
}

export default Admin;
