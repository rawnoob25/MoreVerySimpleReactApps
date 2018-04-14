import React from 'react';
import './NavBar.css';
export class NavBar extends React.Component {
    render() {
        const pgs = ['About','Contact'];
        const links = pgs.map(pg=>{
            return (
                <li><a href={'../public/'+pg+'.html'}>{pg}</a></li>
            );
        });
        return <ul>{links}</ul>;
    }
}

export class Elephant extends React.Component {
    render(){
        const picLink = 'https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg';
        return (
            <div>
                <figure>
                    <img src={picLink} alt='Elephant' height='350'/>
                    <figcaption>A female elephant in Tanzania</figcaption>
                </figure>
                <p>This beast has a top speed of {this.props.specs.speed}</p>
            </div>
        );
    }
}