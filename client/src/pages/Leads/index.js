import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import WorkflowDropdown from "../../components/WorkflowDropdown";
import AgentsDropdown from "../../components/AgentsDropdown";
import API from "../../utils/API";

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
      flowList: [],
      agentList: []
    }
  }

  handleInput = event => {
    console.log(event.target.getAttribute("id"));
    event.preventDefault();
    let toSet = event.target.getAttribute("id");
    this.setState({ [toSet]: event.target.value });
    if(toSet === "workflowId") {
      API.getWorkflow(event.target.value).then((res) => {
        this.setState({ nextContactType: res.data.action1 });
      })
    }
  }

  saveLead = event => {
    event.preventDefault();
    console.log(this.state);
    API.saveLead(this.state);
  }

  getWorkflows = () => {
    API.getWorkflows().then((res) => {
      this.setState((prevState) => {
        prevState.flowList = res.data;
        return prevState;
      });
    });
  }

  getAgents = () => {
    API.getAgents().then((res) => {
      this.setState((prevState) => {
        prevState.agentList = res.data;
        return prevState;
      });
    });
  }

  componentDidMount() {
    this.getWorkflows();
    this.getAgents();
  }


  render() {
    return (
      <div>
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
          <label htmlFor="workflow">Choose workflow</label>
          <WorkflowDropdown options={this.state.flowList} onChange={this.handleInput} id="workflowId"></WorkflowDropdown>
          <label htmlFor="agent">Assign to agent</label>
          <AgentsDropdown options={this.state.agentList} onChange={this.handleInput} id="userId"></AgentsDropdown>
          <Button type='submit' onClick={this.saveLead}>Submit</Button>
        </Form>
      </div>
    );
  };
};

export default Leads;