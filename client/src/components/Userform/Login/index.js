import React, { Component } from "react";
import { Input, Header, Button, Icon } from "semantic-ui-react";

class Login extends Component {

    render() {
        return (
            <div>
                <Header as="h5">Enter your email:</Header>
                <Input name="username" onChange={this.props.handleInputChange} fluid icon='mail' placeholder='email@mail.com' />
                <Header as="h5">Enter your password:</Header>
                <Input fluid type="password" name="password" onChange={this.props.handleInputChange} icon="keyboard" placeholder='password' />
                <Button onClick={this.props.clickHandlerFn} name="Login" style={{ marginTop: "1.5em",marginBottom: "0.5em", backgroundColor: "#007cb0" }}>
                    Get Started
                    <Icon name='right arrow' />
                </Button>
            </div>
        );
    }

}

export default Login;