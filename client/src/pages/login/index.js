import React, { Component } from "react";
import {Grid, Header, Button, Icon, Segment} from "semantic-ui-react";
import axios from "axios";
import Userform from "../../components/Userform";


class Login extends Component {
    // constructor(props) {
    //     super(props);
    // }

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
            <Grid columns={2} container>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h1" content="This is a Big Header" inverted style={{
                            fontSize: '4em',
                            fontWeight: 'normal',
                            marginBottom: 0,
                            marginTop: '1em',

                        }} />
                        <Header as="h2" content="Do whatever you want when you want to" inverted style={{
                            fontSize: '1.7em',
                            fontWeight: 'normal',
                            marginTop: '1.5em',
                        }} />
                        
                    </Grid.Column>
                    <Grid.Column>
                        <Userform />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Segment>
            
        );
    }

}

export default Login;