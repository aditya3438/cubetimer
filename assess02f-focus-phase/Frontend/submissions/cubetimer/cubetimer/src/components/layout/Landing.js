import React, { Component } from 'react';
import Timer from '../timer/Timer';
import { Link } from 'react-router-dom'

class Landing extends Component {
    render (){
        return(
            <div style = {{height: "75vh"}} className="container-valign-wrapper">
                <div className ="row">
                    <div className="col s12 center-align">
                        <h4>
                            Become a better rubik's cube solver with CuTi, your personal cube timer.
                        </h4>
                        <p className ="flow-text grey-text text-darken-1">
                            View your stats, track your progress, create your learning playlists and so much more... 
                        </p>
                        <br/>
                        <Link to="/register">
                            <button type="button" style ={{width:"150px", borderRadius: "3px", letterSpacing:"1.5px"}} 
                            className ="btn btn-large waves-effect waves-light hoverable blue accent-3">
                                Register
                            </button>
                        </Link>
                        <Link to ="/login">
                            <button type ="button" style ={{marginLeft: "2rem", width:"150px", borderRadius: "3px", letterSpacing:"1.5px"}} 
                            className ="btn btn-large waves-effect waves-light hoverable white black-text">
                                Login
                            </button>
                        </Link>
                        <br/>
                        <Timer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;