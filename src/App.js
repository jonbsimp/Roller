import React, { Component } from 'react';
import Roller from "./Roller.js";
import PastRolls from "./PastRolls.js"
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      currentRoll:"Click here for roll",
      lastRoll:[],
    }
  }
  rollRandom=()=>{
      let tempRoll= Math.floor(Math.random()*6+1)
      let tempArr=this.state.lastRoll.concat(tempRoll)
      this.setState({lastRoll:tempArr})
      this.setState({currentRoll:tempRoll})
      this.resetRoll()
  }
  resetRoll=()=>{
    let {lastRoll}=this.state
    let msg ="You've rolled 5 times!"
    if(lastRoll.length >=5){
      this.setState({lastRoll:[]})
      this.setState({currentRoll:msg})
    }
  }
  render(){
    const {
      lastRoll,
      currentRoll
    }=this.state
    const{rollRandom}=this
    console.log(this.state.lastRoll)
    return(
        <div>
        < Roller
        rollRandom={rollRandom}
        currentRoll={currentRoll}
        />
        < PastRolls
        lastRoll={lastRoll}
        />
        </div>
      )
  }
}

export default App;
