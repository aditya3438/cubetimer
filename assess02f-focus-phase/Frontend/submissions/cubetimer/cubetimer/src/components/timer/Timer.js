import React, {Component} from 'react';
//const ms = require('pretty-ms');

class Timer extends Component{

    constructor(){
        super();

            this.state = {
                   time: 0,
                   start: 0,
                   array: [],
                   isOn: false
               }

            }

    startTimer=(e) =>{
        this.setState({
            time: this.state.time,
            start: Date.now() - this.state.time,
            isOn: true
          })
        this.timer= setInterval(() => { 
            this.setState({time: Date.now() - this.state.start})
            },1000)
            console.log("start");
        }

    stopTimer=(e)=>{
        clearInterval(this.timer)
        console.log("stop",this.state.time);
        const list = this.state.array
        list.push(this.state.time)
        console.log(list);
        //this.setState({array: [...this.state.array, this.state.time]})
        this.setState({isOn: false})
        }

    resetTimer=(e)=> {
        this.setState({time: 0})
            console.log("reset");
        }

    render(){

        let start = (this.state.time===0)?
        <button type="button" style ={{width:"150px", borderRadius: "3px", letterSpacing:"1.5px"}} 
        className ="btn btn-large waves-effect waves-light hoverable green accent-3"
        onClick= {this.startTimer} >Start</button>: null

        let stop = (this.state.isOn===true)?
        <button type="button" style ={{width:"150px", borderRadius: "3px", letterSpacing:"1.5px"}} 
        className ="btn btn-large waves-effect waves-light hoverable red accent-3"
        onClick= {this.stopTimer}>Stop</button>:null

        let reset =(this.state.time !==0 && this.state.isOn===false)?
        <button type="button" style ={{width:"150px", borderRadius: "3px", letterSpacing:"1.5px"}} 
        className ="btn btn-large waves-effect waves-light hoverable grey accent-3"
        onClick= {this.resetTimer}>Reset</button>:null

        let resume = (this.state.time !==0 && this.state.isOn===false)?
        <button type="button" style ={{width:"150px", borderRadius: "3px", letterSpacing:"1.5px"}} 
        className ="btn btn-large waves-effect waves-light hoverable purple accent-3"
        onClick= {this.startTimer}>Resume</button>:null

        return(
            <div>
                <h1>
                    <h3>timer: {this.state.time}</h3>
                    {start}
                    {stop}
                    {reset}
                    {resume}
                </h1>
            </div>
        );
    }
}

export default Timer;