import React, { Component } from 'react';

export default class Sendform extends Component {

    constructor(props) {
        super(props);
        this.state = {
            receiverAddress: '',
            sendAmount: 0
        };
    }

    handleChange(event) {
        this.setState({receiverAddress: event.target.value});
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.receiverAddress} onChange={this.handleChange} />
                <input type="number" value={this.state.sendAmount} />
                <button onClick={() => this.props.handleSend()}> Send</button>
            </div>
        );
    }
}