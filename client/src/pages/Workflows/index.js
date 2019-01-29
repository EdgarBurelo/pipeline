import React, { Component } from "react";
import { Button, Form, Table } from "semantic-ui-react";
import API from "../../utils/API";

class Workflows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flowList: [],
      companyId: undefined
    }
  }

  getWorkflows = () => {
    API.getWorkflows().then((res) => {
      this.setState((prevState) => {
        prevState.flowList = res.data;
        return prevState;
      });
    });
  }

  getCompany = () => {
    API.userStatus().then((res) => {
      this.setState((prevState) => {
        prevState.companyId = res.data.company;
        return prevState;
      });
    });
  }

  componentDidMount() {
    this.getCompany();
    this.getWorkflows(this.state.companyId);
  }

  render() {
    return (
      <Table>
        <Table.Row>
          <Table.Cell>Name</Table.Cell>
          <Table.Cell>Number of leads assigned</Table.Cell>
          <Table.Cell>Delete</Table.Cell>
        </Table.Row>
        <Table.Row>

        </Table.Row>
      </Table>

    );
  }

};

export default Workflows;