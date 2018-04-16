import React from 'react';
import './Button.css';

export class Button extends React.Component {
    render(){
        return (
            <div>
                <button onClick = {this.props.clickHandler}>Toggle elephant weight and height.</button>
            </div>
        );
    }
}