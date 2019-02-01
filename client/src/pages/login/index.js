import React, { Component } from "react";
import {Grid, Header, Segment, Icon } from "semantic-ui-react";
import Userform from "../../components/Userform";


class Login extends Component {
    // constructor(props) {
    //     super(props);
    // }
    loginRender() {
        if (!this.props.status) {
            return (
                <Grid columns={2} container stackable>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as="h1" content="This is Pipeline" inverted style={{
                                fontSize: '4em',
                                fontWeight: 'normal',
                                marginBottom: 0,
                                marginTop: '1em',

                            }} />
                            <Header as="h2" content="A leads management tool." inverted style={{
                                fontSize: '1.7em',
                                fontWeight: 'normal',
                                marginTop: '1.5em',
                            }} />

                        </Grid.Column>
                        <Grid.Column>
                            <Userform error={this.props.error} clickHandlerFn={this.props.clickHandlerFn} handleInputChange={this.props.handleInputChange} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            );
        } else {
            return (
                <Segment textAlign="center" style={{
                    padding: '1em 1em',
                    backgroundColor: "#33333D",
                    minHeight: "95vh",
                    border: "0px"
                }}>
                    <Header as="h1" icon inverted style={{
                        fontSize: '4em',
                        fontWeight: 'normal',
                        marginBottom: 0,
                        marginTop: '1em',
                    }} >
                        <Icon name="send" />
                        You're logged in!
                    </Header>
                </Segment>
            );
        }
        
    }
    
    render(){
        return(
            <div>
                <Segment
                    
                    textAlign='left'
                    style={{
                        padding: '1em 1em', 
                        backgroundColor:"#33333D",
                        minHeight: "50vh"}}
                    vertical
                >
                {this.loginRender()}
                    
                
                </Segment>
                <Segment vertical 
                    style={{
                        padding: '5em 0em',
                        minHeight: "30vh"
                    }}
                >
                    
                    <Grid columns={2} container stackable verticalAlign='middle'>
                        <Grid.Row >
                            <Grid.Column width={8}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    We Help Companies and Companions
                                </Header>
                                <p style={{ fontSize: '1.33em' }}>Our tool is a simple Customer Relationship Manager (CRM) for managing contacts with leads and clients. It allows you to define workflows (called “strategies”) and apply them to different clients. The clients will then be assigned in to-do lists to salespeople, following the logic you define in your workflow.</p>
                            </Grid.Column>
                            <Grid.Column floated='right' width={6} textAlign="center">
                                <Icon name="code branch"  size="massive"></Icon>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        );
    }

}

export default Login;