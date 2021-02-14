import React, {Component} from 'react';

class Clock extends Component{
   

    render(){
        return(
            <div>
                <h1 style ={{color:"blue"}} > Hello Clock!!!</h1>
        <h2 style = {{color:'red'}}> It's {this.props.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
export default Clock;