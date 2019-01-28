import React from "react";
import { Dropdown } from "semantic-ui-react";

const WorkflowDropdown = props => (
  
  <Dropdown id={props.id} onChange={props.onChange} defaultValue="">
    
    {props.options.map((item) => (
      <option key={item.id} value={item.id}>{item.flowName}</option>
    ))}
  </Dropdown>

);

export default WorkflowDropdown;