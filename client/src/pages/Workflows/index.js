import React, { Component } from "react";
import { Button, Form, Table, Container } from "semantic-ui-react";
import API from "../../utils/API";
import WorkflowTable from "../../components/WorkflowTable";

class Workflows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flowList: [],
      companyId: undefined
    }
  }

  getWorkflows = () => {
    API.getWorkflows(this.state.companyId).then((res) => {
      this.setState((prevState) => {
        prevState.flowList = res.data;
        return prevState;
      }, () => {
        this.getLeadCounts();
      });
    });
  }

  getLeadCounts = () => {
    let flowList = this.state.flowList;
    flowList.map(function(item, i) {
      API.countLeads(item.id).then((res) => {
        console.log(res.data[0].leads_count);
       item.leads_count = res.data[0].leads_count;
      });
      return item;
    });
    console.log(flowList);
    this.setState((prevState) => {
      prevState.flowList = flowList;
      return prevState;
    });
  }

  getCompanyData = () => {
    API.userStatus().then((res) => {
      this.setState({ companyId: res.data.company }, () => {
        this.getWorkflows();
      });
    });
  }

  componentDidMount() {
    this.getCompanyData();
    
  }

  render() {
    return (
      <Container>
        <WorkflowTable rows={this.state.flowList}></WorkflowTable>
      </Container>

    );
  }

};

export default Workflows;