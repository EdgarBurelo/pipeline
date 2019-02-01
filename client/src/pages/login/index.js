import React, { Component } from "react";
import {Grid, Header, Segment, Icon, GridColumn} from "semantic-ui-react";
import Userform from "../../components/Userform";


class Login extends Component {
    // constructor(props) {
    //     super(props);
    // }
    loginRender() {
        if (!this.props.status) {
            return (
                <Grid columns={2} container>
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
            
        );
    }

}

export default Login;