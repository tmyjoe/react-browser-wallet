import React, { Component } from 'react';


export default class Balance extends Component {

    render() {
        return (  <div>
            <span>ETH</span>
            <span>{this.props.balance}</span>
            <button onClick={() => this.props.handleClick()}> Refresh</button>
        </div>
        );
    }
}