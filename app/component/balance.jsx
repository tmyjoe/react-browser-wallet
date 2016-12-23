import React, { Component } from 'react';


export default class Balance extends Component {

    handleRefresh() {
        const address = this.props.keyStore.getAddresses()[0];
        const web3 = this.props.web3
        web3.eth.getBalance(address, (b) => {
            this.props.handleClick(b)
        })
    }

    render() {
        return <div>
            <p>ETH</p>
            <p>{this.props.balance}</p>
            <button onClick={this.handleRefresh()}> Refresh</button>
        </div>
    }
}