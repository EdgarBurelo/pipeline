import React from "react";
import { Dropdown } from "semantic-ui-react";

const WorkflowDropdown = props => (
  
  <Dropdown id={props.id} 
  onChange={props.onChange}
  placeholder="Choose a workflow"
  fluid search selection options={props.options}
  value={props.options.value}>
  </Dropdown>



);

export default WorkflowDropdown;