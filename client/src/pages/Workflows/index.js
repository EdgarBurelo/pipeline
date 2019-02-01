import React, { Component } from "react";
import { Link } from "react-router-dom";
import NotLogged from "../../components/notLogged";
import { Container, Header } from "semantic-ui-react";
import API from "../../utils/API";
import WorkflowTable from "../../components/WorkflowTable";

class Workflows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flowList: [],
      companyId: undefined,
      click: "hi"
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
    flowList.map(function (item, i) {
      API.countLeads(item.id).then((res) => {
        console.log(res.data[0].leads_count);
        item.leadscount = res.data[0].leads_count;
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

  onClick = () => {
    this.setState({ click: this.state.click + 1 })
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
            Strategies
        </Header>
          <Header as="p" block textAlign="right">
            <Link to="/create">+ Create new strategy</Link>
          </Header>
          <WorkflowTable rows={this.state.flowList} onClick={this.onClick}></WorkflowTable>
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
    <Container style={{ paddingTop: "10px" }}>
      {this.isLoggedIn()}
    </Container>

    );
  }

};

export default Workflows;