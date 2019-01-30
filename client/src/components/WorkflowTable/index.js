import React from "react";
import { Table } from "semantic-ui-react";

const WorkflowTable = props => (
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Strategy name</Table.HeaderCell>
        <Table.HeaderCell>Total leads assigned</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {props.rows.map(({ id, flowName, leads_count }) => (
            <Table.Row key={id}>
              <Table.Cell>{flowName}</Table.Cell>
              <Table.Cell>{leads_count}</Table.Cell>
            </Table.Row>
          ))}
    </Table.Body>

  </Table>

);

export default WorkflowTable;