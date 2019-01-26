import React, { Component } from "react";
import API from "../../utils/API";
import {Button, Dropdown, Table, Container, Icon} from "semantic-ui-react";

class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {

        current: {}

    };
  }

  checkLog = () => {

    console.log(this.props.status);

  }

  componentDidMount() {

    API.userStatus().then(res => {

        //console.log(res.data);

        this.setState(prevState => {

            prevState.current = res.data;

        });

        console.log(this.state.current);

    })

  }

  render() {

    return(

        <Table celled striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="5">Todos</Table.HeaderCell>
        </Table.Row>

        <Table.Row>
          <Table.HeaderCell>#</Table.HeaderCell>

          <Table.HeaderCell>Task</Table.HeaderCell>

          <Table.HeaderCell>Status</Table.HeaderCell>

          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      {/* <Table.Body>{arrRows}</Table.Body> */}
    </Table>

    )

  }
}

export default Todo;

//task, fecha en la que se marco como hecho, resultado (dropdown), button
