import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

class Nav extends Component {
    nameRender() {
        if (this.props.status) {
            let name = this.props.user.name;
            return(
                <span className="navbar-text">{name}</span>
            );
        } 
    }

    buttonRender() {
        if (this.props.status) {
            
            return (
                <div className="ml-auto">
                    <Link className="navbar-brand " to="./passChange" ><Icon name="setting" /></Link>
                    <Button className="navbar-nav " inverted color="red" > Logout</Button>
                </div>
            );
        }
    }

    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark" style={{ backgroundColor: "#0c0c17"}} >
                <Link className="navbar-brand" to="./login" >CRM</Link>
                
                {this.nameRender()}
                {this.buttonRender()}
                
            </nav>

        );
    }
}



export default Nav;