import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import API from "../../utils/API";
import LeadsTable from "../../components/LeadsTable";

class LeadsMgr extends Component {

  constructor(props) {
    super(props);
    this.state = {
      leadsList: [],
      companyId: undefined,
    }
  }

  getLeads = () => {
    API.getCompanyLeads(this.state.companyId).then((res) => {
      console.log(res.data);
      this.setState((prevState) => {
        prevState.leadsList = res.data;
        return prevState;
      });
    });
  }

  getCompanyData = () => {
    API.userStatus().then((res) => {
      this.setState({companyId: res.data.company}, () => {
        this.getLeads();
      });
    });
  }

  componentDidMount() {
    this.getCompanyData();

  }

  render() {

    return (
      <Container style={{ paddingTop: "10px" }}>
        <Header as="h2" block>
          Lead Management
        </Header>
        <Header as="p" block textAlign="right">
        <a href="/leads">+ Add lead</a>
        </Header>
        <LeadsTable rows={this.state.leadsList}></LeadsTable>
      </Container>
    );
  }
}

export default LeadsMgr;