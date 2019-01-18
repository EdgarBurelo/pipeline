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
                <form className="form-inline my-2 my-lg-0 ml-auto">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
           </div>
           
        </nav>

    );
}

export default Nav;