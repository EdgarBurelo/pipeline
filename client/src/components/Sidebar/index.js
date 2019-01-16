import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

class Sidebarn extends Component {
    render(){
        return (
                <Sidebar
                    as={Menu}
                    icon='labeled'
                    inverted
                    vertical
                    visible= {true}
                    width='thin'
                >
                    <Menu.Item as='a'>
                        <Icon name='home' />
                        Home
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='home' />
                        about
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='camera' />
                        anything
                    </Menu.Item>
                </Sidebar>
        );
    }
}

export default Sidebarn;