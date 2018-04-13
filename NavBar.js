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