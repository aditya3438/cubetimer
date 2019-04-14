import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <Router>
                <div className ="nav-wrapper">
                    <nav className = "z-depth-0">
                        <div className = "nav-wrapper-white">
                            <Link to ="/" style={{fontFamily:"monospace"}} className="col s5 brand-logo center black-text">
                                <i className ="material-icons">timer</i>
                                <b>CuTi</b>
                                {/* <i className ="material-icons">offline_bolt</i> */}
                            </Link>
                        </div>
                    </nav>
                </div>
            </Router>

        );
    }
}

export default Navbar;