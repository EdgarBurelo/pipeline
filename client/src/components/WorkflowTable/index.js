import React from "react";
import { Table } from "semantic-ui-react";

const WorkflowTable = props => (
  <Table>
    <Table.Header onClick={props.onClick}>
      <Table.Row>
        <Table.HeaderCell>Strategy name</Table.HeaderCell>
        <Table.HeaderCell>Total leads assigned</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {props.rows.map(({ id, flowName, leadsCount }) => (
            <Table.Row key={id}>
              <Table.Cell>{flowName}</Table.Cell>
              <Table.Cell>{leadsCount}</Table.Cell>
            </Table.Row>
          ))}
    </Table.Body>

  </Table>

);

export default WorkflowTable;