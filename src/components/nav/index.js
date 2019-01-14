import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light" >
            <Link className="navbar-brand" to="./" >CRM</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link className="nav-link" to="./">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="./about" >About</Link></li>
            </ul>
            <form className="form-inline ">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
           </div>
        </nav>

    );
}

export default Nav;