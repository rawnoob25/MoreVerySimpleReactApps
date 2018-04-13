import React from 'react';

export class NavBar extends React.Component {
    render() {
        const pgs = ['About','Contact'];
        const links = pgs.map(pg=>{
            return (
                <a href={'../public/'+pg+'.html'}>{pg}</a>
            );
        });
        return <nav>{links}</nav>;
    }
}