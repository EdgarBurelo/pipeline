import React from "react";
import { Dropdown } from "semantic-ui-react";


const AgentsDropdown = props => (
  
  <Dropdown id={props.id} 
    onChange={props.onChange} 
    placeholder="Choose an agent"
    fluid search selection options={props.options} 
    value={props.options.value}
    >
  </Dropdown>

);

export default AgentsDropdown;