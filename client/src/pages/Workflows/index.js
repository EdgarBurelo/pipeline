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
    }
  }

  getWorkflows = () => {
    //Get list of workflows
    API.getWorkflows(this.state.companyId).then((res) => {
      let flowList = res.data;
      console.log(flowList);
      console.log(this.state.flowList);
        this.setState((prevState) => {
          console.log("setting state with list");
          prevState.flowList = flowList;
          return prevState;
        });
        console.log(this.state.flowList);
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

  isLoggedIn() {
    if (this.props.status) {
      let flowList = this.state.flowList;
      if (flowList.length > 0) {
        return (
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
        return null;
      }
    } else {
      return (
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