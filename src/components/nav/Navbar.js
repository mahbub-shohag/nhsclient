import React from 'react'
// import logo from '../../asset/images/logo.ico';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../asset/css/style.css';
import '../../asset/fonts/font-awesome-4.7.0/css/font-awesome.css';
import ".../../../node_modules/jquery/dist/jquery.min.js";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import '../../../node_modules/popper.js';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
function Navbar() {
    // const username =sessionStorage.getItem("username");
    // const role = sessionStorage.getItem("role");
    const username = "Mahbub Alam";
    const role = "ROLE_ADMIN";
    const signout = () =>{
        sessionStorage.clear();
        window.location.href = "/rammps/";
    }
    return (
            <nav className="navbar navbar-expand-lg bg-light navbar-light sticky-top theme-color">
                <div className="navbar-brand">
                    <Link  to="/" title="TIB">
                    {/* <img src={logo} />     */}
                    <h1>PACTApp</h1>
                    </Link>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                    
                    {role == "ROLE_ADMIN" || role == "ROLE_CHW" ? (
                    <li className="nav-item">
                        <Link className="nav-link" to="listing-book"><i className="fa fa-list" aria-hidden="true"></i> Listing</Link>
                    </li>
                    ):(null)}

                    {role == "ROLE_ADMIN" || role == "ROLE_CALLER" ? (
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="survey"><i className="fa fa-book" aria-hidden="true"></i> Survey</Link>
                        </li>

                    </>    
                    ):(null)}

                    {/* {username == undefined ? (    
                    <li>
                        <Link className="nav-link" to="/signin"><i className="fa fa-sign-in"></i> Signin</Link>
                    </li>
                    ):
                    <li>
                        <button className="btn btn-sm" onClick={signout}>Signout</button>
                    </li>
                    } */}
                    </ul>
                </div> 
            </nav>
            
    )
}
export default Navbar;   