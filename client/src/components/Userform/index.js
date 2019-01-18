import React from "react";
import { List, Label, Tab } from 'semantic-ui-react'
import Login from "./Login";

const Userform = props => {
    const panes = [
        { menuItem: 'Log In', render: () => <Tab.Pane attached={false}><Login clickHandlerFn={props.clickHandlerFn} handleInputChange={props.handleInputChange} /></Tab.Pane> },
        { menuItem: 'Create Account', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
    ];
    return(
    <Tab panes={panes}  menu={{ attached: false, tabular: false }} />
    );
}

export default Userform
