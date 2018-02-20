import React, { Component } from 'react';

class InputBox extends Component {

    render () {
        return (
            <div>
                <input
                    type="text"
                    className="inputForm" 
                    value={ this.props.value } 
                    onChange={ event => this.props.handleKeyChange( event ) }
                />
            </div>
        );
    }
}

export default InputBox;