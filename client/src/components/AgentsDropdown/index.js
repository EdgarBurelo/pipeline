import React from "react";

const AgentsDropdown = props => (
  
  <select id={props.id} onChange={props.onChange}>
    {props.options.map((item) => (
      <option key={item.id} value={item.id}>{item.email}</option>
    ))}
  </select>

);

export default AgentsDropdown;