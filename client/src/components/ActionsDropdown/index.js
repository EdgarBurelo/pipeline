import React from "react";
import { Dropdown } from "semantic-ui-react";

const ActionsDropdown = props => (
  
  <Dropdown id={props.id}
  onChange={props.onChange}
  placeholder="Choose one"
  selection options={props.options}
  value={props.options.value}>
  </Dropdown>



);

export default ActionsDropdown;