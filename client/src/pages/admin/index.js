import React, { Component } from "react";
import { Button, Form, Dropdown, Table, Container, Icon } from "semantic-ui-react";
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
      latest: {},
      users: []
    };
  }

  componentDidMount() {
    this.stateUsers();
  }

  stateUsers = () => {

    API.allUsers().then(data => {

        let stateArr = data.data;

        console.log(this.state.latest);

        this.setState(prevState => {
          prevState.users = stateArr;
          prevState.latest = {};

          return prevState;
        });

        this.clearAll();

        console.log(this.state.latest);

      }).catch(err => {
        console.log(err);
      });
  };

  buttonClick = event => {
    
    event.preventDefault();

    console.log(this.state.latest);

    //new user created
    API.newUser(this.state.latest.name, this.state.latest.email, this.state.latest.type).then(()=>{

      this.stateUsers();

    });

  };

  deleteClick = event => {

    event.preventDefault();

    let click = event.target.parentElement.parentElement.id;

    let num = parseInt(click);

    API.erase(num).then(()=>{

      this.stateUsers();

    });

  }

  nameChange = event => {

    event.preventDefault();

    let iName = event.target.value;

    this.setState(prevState=>{

      prevState.latest.name = iName

    });

  };

  emailChange = event => {

    event.preventDefault();

    let iEmail = event.target.value;

    this.setState(prevState=>{

      prevState.latest.email = iEmail

    });

  };

  typeChange = event => {
    event.preventDefault();

    let iType = event.target.children[0].innerText;

    this.setState(prevState=>{

      prevState.latest.type = iType

    });

  };

  clearAll = () => {

    document.getElementById("create").reset();

  }

  render() {

    let arrRows = this.state.users.map((rows, index) => {

      return (

        <Table.Row key={rows.id} id={rows.id}>

          <Table.Cell>

            {index + 1}

          </Table.Cell>

          <Table.Cell>

            {rows.name}

          </Table.Cell>

          <Table.Cell>

            {rows.email}

          </Table.Cell>

          <Table.Cell>

            {rows.profile}
          </Table.Cell>

          <Table.Cell textAlign="center" width="2">
            <Button type="submit" onClick={this.deleteClick}>
              <Icon name='delete' />
              Delete
            </Button>
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
            <Form id="create" style={{ paddingTop: "10px" }}>
              <Form.Field>
                <label>Full Name</label>
                <input placeholder="Full Name" value={this.state.latest.name} onChange={this.nameChange} />
              </Form.Field>

              <Form.Field>
                <label>Email Address</label>
                <input placeholder="Email Address" value={this.state.latest.email} onChange={this.emailChange} />
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
                  <Table.HeaderCell colSpan="5">Users</Table.HeaderCell>
                </Table.Row>

                <Table.Row>
                  <Table.HeaderCell>#</Table.HeaderCell>

                  <Table.HeaderCell>Name</Table.HeaderCell>

                  <Table.HeaderCell>Email</Table.HeaderCell>

                  <Table.HeaderCell>User Type</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
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
