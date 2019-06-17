import React, { Component } from 'react';
import './App.css';

class PastRolls extends Component {

    render(){
        const { lastRoll } = this.props
        return (
           <div>
           <ol>
            {lastRoll.map((roll)=> {
                return(
                    <li>{roll}</li>
                )
            })}
            </ol>
           </div>
        );
  }
}

export default PastRolls;