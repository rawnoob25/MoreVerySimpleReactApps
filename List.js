import React from 'react';

export class List extends React.Component {
    render(){
        let header = 'Example';
        if(this.props.children instanceof Array) {
            header += ('s of '+this.props.type+'s are:');
        } else {
            header += (' of '+this.props.type+' is:');
        }
        return (
            <div>
                <h3>{header}</h3>
                <ul>{this.props.children}</ul>
            </div>
        );
    }
}

