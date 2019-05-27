import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
//import About from './About';

class Navbar extends Component{
    render(){
        return(
            // <Router>
            
                <div className ="nav-wrapper">
                    <nav className = "z-depth-0">
                        <div className = "nav-wrapper-white">
                            <Link to ="/" style={{fontFamily:"monospace"}} className="col s3 brand-logo center black-text">
                                <i className ="material-icons">timer</i>
                                <b>CuTi</b>
                                {/* <i className ="material-icons">offline_bolt</i> */}
                            </Link>
                            <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li>
                                <Link to ="/about" style={{fontFamily:"monospace"}} className="col s5 flow-text">
                                    About
                                </Link>
                            </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            // </Router>

        );
    }
}

export default Navbar;