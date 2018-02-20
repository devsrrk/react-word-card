import React, { Component } from 'react';

class Card extends Component {

    render() {
        console.log(this);
        return (
        <div 
            className="card"
            onClick={ event => this.props.remove( event, this.props.index )}
        >
            { this.props.value }
        </div>
        );
    }
}

export default Card;