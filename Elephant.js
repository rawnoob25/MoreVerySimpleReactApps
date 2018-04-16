
import React from 'react';
import {Button} from './Button';
export class Elephant extends React.Component {
    handleClick() {
        const toToggle = document.getElementById('htwt');
        console.log(toToggle.style.visibility);
        if (toToggle.style.visibility === 'hidden') {
            toToggle.style.visibility = 'visible';
        } else {
            toToggle.style.visibility = 'hidden';
        }
    }
    render() {
        const picLink = 'https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg';
        const paraStyle = {
            visibility:'hidden'
        };
        return (
            <div>
                <figure>
                    <img src={picLink} alt='Elephant' height='350'/>
                    <figcaption>A female elephant in Tanzania</figcaption>
                </figure>
                <Button clickHandler={this.handleClick} />
                <p>This beast has a top speed of {this.props.specs.speed}</p>
                <p id = 'htwt' style = {paraStyle}>It's {this.props.specs.height} tall and weighs {this.props.specs.weight}.</p>
            </div>
        );
    }
}