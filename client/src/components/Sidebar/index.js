import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

class Sidebarn extends Component {
    
    
    renderSidebarElements() {
        if(this.props.status) {
            return(
                <div>
                    <Link to="/todo">
                        <Menu.Item>
                            <Icon name='book' />
                            Admin
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