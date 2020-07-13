import React from 'react';

class Bomb extends React.Component{
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render(){
        return(
        <h4>{this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`}</h4>
        )
    }
}
export default Bomb