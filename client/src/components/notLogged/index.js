import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Message } from "semantic-ui-react";

class NotLogged extends Component {
    render() {
        return(
            <Message color='red' style={{marginTop:"10px", textAlign:"center"}} 
                header={`You're not logged in`}
                list={[
                    'You must login first to access this functionality.',
                    <Link key="1" to="/login">Go to the Login page.</Link>,
                ]}
            />
        );
    }
}

export default NotLogged;