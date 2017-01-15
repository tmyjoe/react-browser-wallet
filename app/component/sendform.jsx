import React, { Component } from 'react';

export default class Sendform extends Component {

    constructor(props) {
        super(props);
        this.state = {
            receiverAddress: '',
            sendAmount: 0
        };
    }

    handleAddressChange(event) {
        this.setState({receiverAddress: event.target.value});
    }

    handleAmountChange(event) {
        this.setState({sendAmount: event.target.value})
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.receiverAddress} onChange={this.handleAddressChange} />
                <input type="number" value={this.state.sendAmount} onChange={this.handleAmountChange}/>
                <button onClick={() => this.props.handleSend()}> Send</button>
            </div>
        );
    }
}