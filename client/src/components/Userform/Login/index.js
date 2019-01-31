import React, { Component } from "react";
import { Input, Header, Button, Message } from "semantic-ui-react";

class Login extends Component {
    logginFail() {
        //console.log(this.props.error);
        if (this.props.error.length >0 ) {
            return (
                <Message error list={this.props.error} header="The following errors were presented:" />
            );
        } 
    }

    render() {
        return (
            <div>
                {this.logginFail()}
                <Header as="h5">Enter your email:</Header>
                <Input name="username" onChange={this.props.handleInputChange} fluid icon='mail' placeholder='email@mail.com' />
                <Header as="h5">Enter your password:</Header>
                <Input fluid type="password" name="password" onChange={this.props.handleInputChange} icon="keyboard" placeholder='password' />
                <Button onClick={this.props.clickHandlerFn} name="Login" style={{ marginTop: "1.5em",marginBottom: "0.5em", backgroundColor: "#007cb0" }}>
                    Get Started
                </Button>

            </div>
        );
    }

}

export default Login;