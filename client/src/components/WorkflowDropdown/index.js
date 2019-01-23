import React from "react";

const WorkflowDropdown = props => (
  
  <select id={props.id} onChange={props.onChange}>
    {props.options.map((item) => (
      <option key={item.id} value={item.id}>{item.flowName}</option>
    ))}
  </select>

);

export default WorkflowDropdown;