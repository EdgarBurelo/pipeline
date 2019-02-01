import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Header } from "semantic-ui-react";
import NotLogged from "../../components/notLogged";
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

  isLoggedIn() {
    //console.log(this.props.status);
    if(this.props.status) {
      return(
        <div>
          <Header as="h2" block>
            Lead Management
          </Header>
          <Header as="p" block textAlign="right">
            <Link to="/leads">+ Add lead</Link>
          </Header>
          <LeadsTable rows={this.state.leadsList}></LeadsTable>
        </div>
      );
    } else {
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
}

export default LeadsMgr;