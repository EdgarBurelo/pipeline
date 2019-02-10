import React from "react";
import { Table } from "semantic-ui-react";

const LeadsTable = props => (
  <Table>
    <Table.Header onClick={props.onClick}>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Phone</Table.HeaderCell>
        <Table.HeaderCell>Assigned to</Table.HeaderCell>
        <Table.HeaderCell>Strategy</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {props.rows.map(({ id, firstName, lastName, email, phone, user, workflow}) => (
            <Table.Row key={id}>
              <Table.Cell>{firstName} {lastName}</Table.Cell>
              <Table.Cell>{email}</Table.Cell>
              <Table.Cell>{phone}</Table.Cell>
              <Table.Cell>{user ? user.name : null}</Table.Cell>
              <Table.Cell>{workflow ? workflow.flowName : null}</Table.Cell>
            </Table.Row>
          ))}
    </Table.Body>

  </Table>

);

export default LeadsTable;