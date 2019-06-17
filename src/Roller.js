import React, { Component } from 'react';
import './App.css';

class Roller extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){
        const {
            rollRandom,
            currentRoll
        }=this.props
        return(
            <div onClick={rollRandom} className="Roller">
                <h2>{currentRoll}</h2>
            </div>
        )
  }
}

export default Roller;