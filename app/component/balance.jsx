import React, { Component } from 'react';

export default class Balance extends Component {

    handleRefresh() {
        this.props.handleClick(11)
    }

    render() {
        return <div>
            <p>ETH</p>
            <p>{this.props.balance}</p>
            <button onClick={this.handleRefresh()}> Refresh</button>
        </div>
    }
}