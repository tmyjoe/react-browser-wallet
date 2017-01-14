import React, { Component } from 'react';

export default class Sendform extends Component {

    render() {
        return (
            <div>
                <input type="text" value="test" />
                <input type="number" value="test" />
                <button onClick={() => this.props.handleSend()}> Send</button>
            </div>
        );
    }
}