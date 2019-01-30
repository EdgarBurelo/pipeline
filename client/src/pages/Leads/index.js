import React, { Component } from "react";
import { Button, Form, Container } from "semantic-ui-react";
import WorkflowDropdown from "../../components/WorkflowDropdown";
import AgentsDropdown from "../../components/AgentsDropdown";
import API from "../../utils/API";
import moment from "moment";

class Leads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      phone: undefined,
      workflowId: undefined,
      assignedTo: undefined,
      nextContactDate: undefined,
      nextContactType: undefined,
      nextContactStep: undefined,
      companyId: undefined,
      flowList: [],
      agentList: []
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

  saveLead = event => {
    event.preventDefault();
    console.log(this.state);
    API.saveLead(this.state);
  }

  getCompanyData = () => {
    API.userStatus().then((res) => {
      this.setState({ companyId: res.data.company }, () => {
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



  componentDidMount() {
    this.getCompanyData();
  }


  render() {
    return (
      <div>
        <Container>
          <Form style={{ paddingTop: "10px" }}>
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
              <label>Choose workflow</label>
              <WorkflowDropdown options={this.state.flowList} onChange={this.handleDropDown} id="workflowId"></WorkflowDropdown>
            </Form.Field>
            <Form.Field>
              <label>Assign to agent</label>
              <AgentsDropdown options={this.state.agentList} onChange={this.handleDropDown} id="assignedTo"></AgentsDropdown>
            </Form.Field>
            <Button type='submit' onClick={this.saveLead}>Submit</Button>
          </Form>
        </Container>
      </div>
    );
  };
};

export default Leads;