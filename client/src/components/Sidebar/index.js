import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

class Sidebarn extends Component {
    
    renderSidebarElements() {
        if(this.props.status) {
            return(
                <Menu.Item as='a'>
                    <Icon name='home' />
                    Home
                </Menu.Item>
            );
        } else {
            return(
                <Menu.Item>
                    Create a User<br /> or Login
                </Menu.Item>
            );
        }
    }
    render(){
        //console.log(this.props.status);
        return (
                <Sidebar
                    as={Menu}
                    icon='labeled'
                    inverted
                    vertical
                    visible= {true}
                    width='thin'
                >
                {this.renderSidebarElements()}
                    
                </Sidebar>
        );
    }
}

export default Sidebarn;