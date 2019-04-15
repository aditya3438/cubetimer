import React, {Component} from 'react';
//const ms = require('pretty-ms');

class Timer extends Component{

        // constructor();{
        //     super();

        //        this.state = {
        //            time: 0,
        //            start: 0,
        //        }

        //     this.startTimer = this.startTimer.bind(this);
        //     this.stopTimer = this.stopTimer.bind(this);
        //     this.resetTimer = this.resetTimer.bind(this);
        // }

        // startTimer=(e) =>{
        //     console.log("start");
        //   }
        // stopTimer=(e)=>{
        //     console.log("stop");
        //   }
        // resetTimer=(e)=> {
        //     console.log("reset");
        //   }
render(){
        return(
            <div>
                <h1>
                    <h3>timer: display will be here</h3>
                    <button type="button" style ={{width:"150px", borderRadius: "3px", letterSpacing:"1.5px"}} 
                           className ="btn btn-large waves-effect waves-light hoverable green accent-3"
                           onClick= {this.startTimer} >Start</button>
                    <button type="button" style ={{width:"150px", borderRadius: "3px", letterSpacing:"1.5px"}} 
                           className ="btn btn-large waves-effect waves-light hoverable red accent-3">Stop</button>
                    <button type="button" style ={{width:"150px", borderRadius: "3px", letterSpacing:"1.5px"}} 
                           className ="btn btn-large waves-effect waves-light hoverable purple accent-3">Reset</button>
                </h1>
            </div>
        );
    }
}

export default Timer;