import React, { Component } from "react";
import { Button, Form, Container, Message, Header } from "semantic-ui-react";
import WorkflowDropdown from "../../components/WorkflowDropdown";
import AgentsDropdown from "../../components/AgentsDropdown";
import API from "../../utils/API";
import moment from "moment";
import NotLogged from "../../components/notLogged";

class Leads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      phone: undefined,
      workflowId: undefined,
      userId: undefined,
      nextContactDate: undefined,
      nextContactType: undefined,
      nextContactStep: undefined,
      companyId: undefined,
      flowList: [],
      agentList: [],
      formState: undefined
    }
  }

  handleInput = event => {
    event.preventDefault();
    let toSet = event.target.getAttribute("id");
    this.setState({ [toSet]: event.target.value });
    if(toSet === "workflowId") {
      API.getWorkflow(event.target.value).then((res) => {
        this.setState({ nextContactType: res.data.action1 });
        this.setState({nextContactStep: "action1"});
        let date = moment().add(1, "days");
        this.setState({nextContactDate: date._d});
      });
    };
  }

  handleDropDown = (event, data) => {
    event.preventDefault();
    let toSet = data.id;
    this.setState({ [toSet]: data.value });
    if (toSet === "workflowId") {
      API.getWorkflow(data.value).then((res) => {
        this.setState({ nextContactType: res.data.action1 });
        this.setState({ nextContactStep: "action1" });
        let date = moment().add(1, "days");
        this.setState({ nextContactDate: date._d });
      });
    };

  }

  saveLead = event => {
    event.preventDefault();
    console.log(this.state);
    API.saveLead(this.state);
    this.clearForm();
  }

  clearForm = () => {
      document.getElementById("leadForm").reset();
  }

  getCompanyData = () => {
    API.userStatus().then((res) => {
      this.setState({companyId: res.data.company}, () => {
        this.getWorkflows();
        this.getAgents();
      });
    });
  }

  getWorkflows = () => {
    API.getWorkflows(this.state.companyId).then((res) => {
      let reformatted = res.data.map(item => ({ value: item.id, text: item.flowName, key: item.id }));
       this.setState((prevState) => {
        prevState.flowList = reformatted;
        return prevState;
      }); 
    });
  }

  getAgents = () => {
    API.getAgents(this.state.companyId).then((res) => {
      let reformatted = res.data.map(item => ({ value: item.id, text: item.email, key: item.id }));
      this.setState((prevState) => {
        prevState.agentList = reformatted;
        return prevState;
      });
    });
  }
 

  componentDidMount() {
    this.getCompanyData();
  }

  
isLoggedIn() {
  console.log(this.props.status);
  if (this.props.status) {
    return(
      <div>
        <Header as='h2' block>
          Add Lead
        </Header>
        <Form style={{ paddingTop: "10px" }} id="leadForm">
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
          <Form.Field>
            <label>Choose strategy</label>
            <WorkflowDropdown options={this.state.flowList} onChange={this.handleDropDown} id="workflowId"></WorkflowDropdown>
          </Form.Field>
          <Form.Field>
            <label>Assign to agent</label>
            <AgentsDropdown options={this.state.agentList} onChange={this.handleDropDown} id="userId"></AgentsDropdown>
          </Form.Field>
          <Message success header='Lead saved' content="You can add another if you'd like!" />
          <Button type='submit' onClick={this.saveLead}>Submit</Button>
        </Form>
      </div>
    );
  } else {
    return(
      <NotLogged />
    );
  }
}

  render() {
    return (
      <div>
        <Container style={{ paddingTop: "10px" }}>
          {this.isLoggedIn()}
        </Container>
      </div>
    );
  };
};

export default Leads;