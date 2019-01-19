import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark" style={{ backgroundColor: "#0c0c17"}} >
            <Link className="navbar-brand" to="./login" >CRM</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                
           </div>
           
        </nav>

    );
}

export default Nav;