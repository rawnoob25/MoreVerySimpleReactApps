import React from 'react';
import './ToggleButton.css';

export class ToggleButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {bg:'#e83617'}
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        const col = this.state.bg === '#e83617'?'#0b22a5':'#e83617';
        this.setState({bg:col});
    }
    render(){
        const buttonStyle = {background:this.state.bg, borderRadius:'8px', fontSize:'2em', display:'block', 
        margin:'auto'};
        return (
            <div>
                <button style={buttonStyle} onClick={this.toggle}>Click to change color</button>
            </div>
        );
    }

}