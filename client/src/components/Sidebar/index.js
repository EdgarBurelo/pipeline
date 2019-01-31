import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

class Sidebarn extends Component {
    
    
    renderSidebarElements() {
        if(this.props.status) {
            return(
                <div>
                    <Link to="/admin">
                        <Menu.Item>
                            <Icon name='sitemap' />
                            User Admin
                        </Menu.Item>
                    </Link>
                    <Link to="/create">
                        <Menu.Item>
                            <Icon name='edit outline' />
                            Workflows creator
                        </Menu.Item>
                    </Link>
                    <Link to="/leads">
                        <Menu.Item>
                            <Icon name='address book outline' />
                            Leads
                        </Menu.Item>
                    </Link>
                    <Link to="/todo">
                        <Menu.Item>
                            <Icon name='tasks' />
                            To Do
                        </Menu.Item>
                    </Link>
                    <Link to="/workflows">
                        <Menu.Item>
                            <Icon name='building outline' />
                            Workflows Assign
                        </Menu.Item>
                    </Link>
                </div>
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