import React from "react";
import { Tab } from 'semantic-ui-react';
import Signup from "./Signup";
import Login from "./Login";

const Userform = props => {
    const panes = [
        { menuItem: 'Log In', render: () => <Tab.Pane attached={false}><Login error={props.error} clickHandlerFn={props.clickHandlerFn} handleInputChange={props.handleInputChange} /></Tab.Pane> },
        { menuItem: 'Create Account', render: () => <Tab.Pane attached={false}><Signup error={props.error} clickHandlerFn={props.clickHandlerFn} handleInputChange={props.handleInputChange}/></Tab.Pane> },
    ];
    return(
    <Tab panes={panes}  menu={{ attached: false, tabular: false }} />
    );
}

export default Userform
