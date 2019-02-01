import React, { Component } from "react";
import { Segment, Container, Form, Message, Button, Header } from "semantic-ui-react";
import NotLogged from "../../components/notLogged";
import API from "../../utils/API";

class PassChange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passHand: {
                apassword:"",
                npassword: "",
                rnpassword: "",
            },
            error: [],
            success: false
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
        if (!samePassworFun(npassword, rnpassword) && rnpassword) {
            error.push("The password doesn`t match!");
        }
        if (samePassworFun(apassword,npassword)) {
            error.push("The actual password cannot be the same as the new password!");
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
        API.passChange(actualPass,newPass).then((res) => {
            console.log(res);
            switch (res.data.stat) {
                case ("200"):
                    console.log("a");
                    this.successHandler();
                    this.clearForm();
                    break;
                case ("401"):
                    // console.log("error");
                    let error = [res.data.msg]
                    this.errorHandlerLog(error);
                    this.clearForm();
                    break;
                default:
                console.log("def");
                break;
                
            }
        });
    }
    successHandler() {
        this.setState(prevState => {
            prevState.success = true;
            return prevState;
        });
    }
    errorHandlerLog(error) {
        this.setState((prevState) => {
            prevState.error = error;
            return prevState;
        });
        //console.log(this.state);
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
    
    clearForm() {
        document.getElementById("passChangeF").reset();
    }

    logedinRender() {
        if(this.props.status) {
            return(
                <Container style={{padding: "20px 20%"}}>
                    <Segment raised>
                        <Header as='h2'>Welcome {this.props.user.name} change your password</Header>
                        <Form error success id="passChangeF">
                            <PassFail error={this.state.error} />
                            <PassSuccess success={this.state.success}  />
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

let PassSuccess = (props) => {
    console.log(props.success);
    if(props.success) {
        return(
            <Message
                success
                header='Success!'
                content='Your password was changed successfully'
            />
        );
    } else {
        return(
            <span></span>
        );
    }
}

export default PassChange;