import React, { Component } from "react";
import { Input, Header, Button, Icon } from "semantic-ui-react";

class Signup extends Component {

    render() {
        return (
            <div>
                <Header as="h5" style={{ marginBottom: "0.3em" }}>Enter your name:</Header>
                <Input name="Name" onChange={this.props.handleInputChange} fluid icon='address book' placeholder='Your Name' />
                <Header as="h5" style={{ margin: "0.3em 0" }}>Enter the company name:</Header>
                <Input name="Company" onChange={this.props.handleInputChange} fluid icon='address card' placeholder='Your Company' />
                <Header as="h5" style={{ margin: "0.3em 0" }}>Enter your email:</Header>
                <Input name="username" onChange={this.props.handleInputChange} fluid icon='mail' placeholder='email@mail.com' />
                <Header as="h5" style={{ margin: "0.3em 0" }}>Enter your password:</Header>
                <Input fluid type="password" name="password" onChange={this.props.handleInputChange} icon="keyboard" placeholder='password' />
                <Header as="h5" style={{margin:"0.5em 0px"}}>Repeat your password:</Header>
                <Input fluid type="password" name="passwordRep" onChange={this.props.handleInputChange} icon="keyboard" placeholder='password' />
                <Button onClick={this.props.clickHandlerFn} name="Sign" style={{ marginTop: "1.5em", marginBottom: "0.5em", backgroundColor: "#007cb0" }}>
                    Get Started
                    <Icon name='right arrow' />
                </Button>
            </div>
        );
    }

}

export default Signup;