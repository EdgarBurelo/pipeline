import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon, Menu, Sidebar, Header, Divider } from 'semantic-ui-react';

class Sidebarn extends Component {
    
    
    renderSidebarElements() {
        if(this.props.status) {
            console.log(this.props.user.profile);
            switch (this.props.user.profile) {
                case ("Admin"):
                    console.log("admin");
                    return <SideAdmin />;
                case ("Agent"):
                    console.log("agent");
                    return <SideAgent />;
                case ("Supervisor"):
                    console.log("super");
                    return <SideSuper />;
                default:
                    console.log("default");
                    return <SideAdmin />;
            }
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

let SideAdmin = (props) => {
    return(
        <div>
            <Header as="h2" icon inverted >
                <Menu.Item>
                    <Icon name='code branch' />
                </Menu.Item>
            </Header>
            <Divider horizontal inverted > Actions</Divider>
            <Link to="/admin">
                <Menu.Item>
                    <Icon name='sitemap' />
                    User Admin
                </Menu.Item>
            </Link>
            <Link to="/create">
                <Menu.Item>
                    <Icon name='edit outline' />
                    Strategy builder
                </Menu.Item>
            </Link>
            <Link to="/manage-leads">
                <Menu.Item>
                    <Icon name='address book outline' />
                    Leads
                </Menu.Item>
            </Link>
            <Link to="/strategies">
                <Menu.Item>
                    <Icon name='chess rook' />
                    Strategies
                </Menu.Item>
            </Link>
            <Link to="/todo">
                <Menu.Item>
                    <Icon name='tasks' />
                    Tasks
                </Menu.Item>
            </Link>
        </div>
    )
}

let SideSuper = (props) => {
    return (
        <div>
            <Header as="h2" icon inverted >
                <Menu.Item>
                    <Icon name='code branch' />
                </Menu.Item>
            </Header>
            <Divider horizontal inverted > Actions</Divider>
            <Link to="/create">
                <Menu.Item>
                    <Icon name='edit outline' />
                    Strategy builder
                </Menu.Item>
            </Link>
            <Link to="/manage-leads">
                <Menu.Item>
                    <Icon name='address book outline' />
                    Leads
                </Menu.Item>
            </Link>
            <Link to="/strategies">
                <Menu.Item>
                    <Icon name='chess rook' />
                    Strategies
                </Menu.Item>
            </Link>
            <Link to="/todo">
                <Menu.Item>
                    <Icon name='tasks' />
                    Tasks
                </Menu.Item>
            </Link>
        </div>
    )
}

let SideAgent = (props) => {
    return (
        <div>
            <Header as="h2" icon inverted >
                <Menu.Item>
                    <Icon name='code branch' />
                </Menu.Item>
            </Header>
            <Divider horizontal inverted > Actions</Divider>
            <Link to="/todo">
                <Menu.Item>
                    <Icon name='tasks' />
                    Tasks
                </Menu.Item>
            </Link>
        </div>
    )
}

export default Sidebarn;