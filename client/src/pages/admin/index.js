import React, { Component } from "react";
import { Button, Form, Dropdown, Table, Container, Icon, Message } from "semantic-ui-react";
import API from "../../utils/API";
import NotLogged from "../../components/notLogged";

const userTypes = [
  { text: "Agent", value: "Agent" },
  { text: "Supervisor", value: "Supervisor" }
];

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: undefined,
      email: undefined,
      emailCheck: undefined,
      err: undefined,
      type: undefined,
      users: [],
      current: {}
    };
  }

  componentDidMount() {
    this.userCheck();
  }

  componentDidUpdate() {

    console.log("UPDATE STAte", this.state);

  }

  stateUsers = (comp) => {

    API.getAgents(comp).then(data => {

        let stateArr = data.data;

        console.log("STATE ARR", stateArr);

        this.setState({
          users: stateArr
        });

        if (this.state.name === undefined && this.state.email === undefined && this.state.type === undefined) {

          console.log("STATE AFTER ALL USERS POP", this.state.name, this.state.email, this.state.type);

        } else {

          console.log("STATE LATEST OBJ DELETED BRO", this.state.name, this.state.email, this.state.type);

          this.clearAll();

        }

      }).catch(err => {
        console.log(err);
      });
  };

  buttonClick = event => {
    
    event.preventDefault();

    if (this.state.emailCheck && this.state.type !== " " && this.state.name !== " ") {

      API.newUser(this.state.name, this.state.email, this.state.type, this.state.current.company).then(()=>{

        this.stateUsers(this.state.current.company);
  
      });

    } else {

      console.log("ERRORS BUB");

      this.setState({err: true});

    }

  };
  
  userCheck() {

    API.userStatus().then(res => {

      this.setState({

        current: res.data

      });

      this.stateUsers(this.state.current.company);

    });
  }

  deleteClick = event => {

    event.preventDefault();

    let click = event.target.parentElement.parentElement.id;

    let num = parseInt(click);

    API.erase(num).then(()=>{

      this.stateUsers(this.state.current.company);

    });

  }

  nameChange = event => {

    event.preventDefault();

    let iName = event.target.value;

    this.setState({

      name: iName

    });

  };

  emailChange = event => {

    event.preventDefault();

    let iEmail = event.target.value;

    let isMail = (mail) => {
      let emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{1,5}?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm); 
      return emailRegex.test(mail);
    }

    if (isMail(iEmail)) {

      this.setState({

        email: iEmail,
        emailCheck: true
  
      });

    } else {

      this.setState({

        emailCheck: false
  
      });

      console.log(isMail(iEmail));

    }

  };

  typeChange = event => {
    event.preventDefault();

    let iType = event.target.children[0].innerText;

    this.setState({

      type: iType

    });

  };

  clearAll = () => {

    document.getElementById("form").reset();

  };

  render() {

    let EmailCheck = (props) => {

      console.log("PROP ERROR", props.error);
    
      if (props.error === false) {

        console.log("WAHWAHWAH");
    
        return (
          <Message error header="Please enter a valid email address." />
        );
        
      } else {

        console.log("IT's true run span");
    
        return (
          <span></span>
        );
        
      }
    }

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
      
      let loggedStatus = this.props.status;
      if(loggedStatus) {
        return(
          <div>
            <Form id="form" style={{ paddingTop: "10px" }}>
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

            <EmailCheck error={this.state.emailCheck} />

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
