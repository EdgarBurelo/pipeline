import React from "react";
import { Dropdown } from "semantic-ui-react";


const AgentsDropdown = props => (
  
  <select id={props.id} onChange={props.onChange} defaultValue="">
    <option id="">Select one</option>
    {props.options.map((item) => (
      <option key={item.id} value={item.id}>{item.email}</option>
    ))}
  </select>

);

export default AgentsDropdown;