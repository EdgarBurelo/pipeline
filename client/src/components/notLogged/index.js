import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Message } from "semantic-ui-react";

class NotLogged extends Component {
    render() {
        return(
            <Message color='red' style={{marginTop:"10px", textAlign:"center"}} 
                header={`You're not logged`}
                list={[
                    'You must loggin fist to access to this functionallity',
                    <Link key="1" to="/login">Go to Login page to access with your credentials</Link>,
                ]}
            />
        );
    }
}

export default NotLogged;