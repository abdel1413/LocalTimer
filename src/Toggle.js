import React, {Component} from 'react';

class Toggle extends Component{
    constructor(props){
        super(props);
        this.state ={
            isToggledOn:true    
        }

        // In JavaScript, class methods are not bound by
        // default. If you forget to bind this.handleClick 
        //and pass it to onClick, this will be undefined when 
        //the function is actually called.
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick =()=>{
        this.setState(state =>({isToggledOn:!state.isToggledOn}))
    }

    render(){
        return(
            <div>
                <button onClick = {this.handleClick} style ={{color:"blue" }}>
                 {this.state.isToggledOn? 'ON': 'OFF'}
                </button>
            </div>
        );
    }
}

export default Toggle;