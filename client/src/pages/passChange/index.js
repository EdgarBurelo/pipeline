import React, { Component } from "react";
import { Segment, Container, Form, Message, Button, Header } from "semantic-ui-react";
import NotLogged from "../../components/notLogged";

class PassChange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passHand: {
                apassword:"",
                npassword: "",
                rnpassword: "",
            },
            error: []

        };
    }

    clickHandler = (event) =>{
        event.preventDefault();
        
        let apassword = this.state.passHand.apassword;
        let npassword = this.state.passHand.npassword;
        let rnpassword = this.state.passHand.rnpassword;
        
        let samePassworFun = (newPassword, repeatNewPassword) => {
            let samePass = newPassword === repeatNewPassword ? true : false;
            return samePass;
        }

        let isPassword = (password) => {
            //let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            let weakRegex = new RegExp("^(?=.*[a-zA-Z0-9])(?=.{8,})");
            return weakRegex.test(password);
        }

        let error = [];
        if (!isPassword(apassword)) {
            error.push("Your actual password should be at least 8 characters long!");
        }
        if (!isPassword(npassword)) {
            error.push("Your new password should be at least 8 characters long!");
        }
        if(!rnpassword) {
            error.push("Your need to rewirte your new password");
        }
        if (!samePassworFun(npassword,rnpassword) && rnpassword) {
            error.push("The password doesn`t match!");
        }
        if (error.length > 0) {
            this.errorHandlerLog(error);
        } else {
            this.setState(prevState => {
                prevState.error = [];
                return prevState;
            });
            this.passChangeFunc(apassword,npassword);
        }
    }
    
    passChangeFunc(actualPass,newPass) {
        console.log(actualPass,newPass);
    }

    errorHandlerLog(error) {
        this.setState((prevState) => {
            prevState.error = error;
            return prevState;
        });
        console.log(this.state);
    }

    eventHandler = event => {
        let value = event.target.value;
        const name = event.target.name;
        
        this.setState((previousState) => {
            previousState.passHand[name] = value;
            return previousState;
        });
        //console.log(this.state);
    };
    
    

    logedinRender() {
        if(!this.props.status) {
            return(
                <Container style={{padding: "20px 20%"}}>
                    <Segment raised>
                        <Header as='h2'>Welcome "user" change your password</Header>
                        <Form error>
                            <PassFail error={this.state.error} />
                            <Form.Field>
                                <label>Write your actual password</label>
                                <input onChange={this.eventHandler} name="apassword" type="password" placeholder='Actual password' />
                            </Form.Field>
                            <Form.Field>
                                <label>Write your new password</label>
                                <input onChange={this.eventHandler} name="npassword" type="password" placeholder='New password' />
                            </Form.Field>
                            <Form.Field>
                                <label>Rewrite your new password</label>
                                <input onChange={this.eventHandler} name="rnpassword" type="password" placeholder='Rewrite password' />
                            </Form.Field>
                            <Button onClick={this.clickHandler}>Submit</Button>
                        </Form>
                    </Segment>
                </Container>
            );
        } else {
            return(
                <NotLogged />
            );
        }
    }

    render() {
        return (
            <Segment vertical textAlign='left' style={{
                    padding: '1em 1em',
                    backgroundColor: "#33333D",
                    minHeight: "95vh"
                }}
                >
                {this.logedinRender()}
            </Segment>
        );
    }

}

let PassFail = (props) => {
    console.log(props.error);
    if (props.error.length > 0) {
        return (
            <Message error list={props.error} header="The following errors were presented:" />
        );
    } else {
        return (
            <span></span>
        );
    }
}

export default PassChange;