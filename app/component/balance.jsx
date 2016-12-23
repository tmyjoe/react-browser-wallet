import React, { Component } from 'react';


export default class Balance extends Component {

    handleRefresh() {
        console.log("handleRefresh")
        const address = this.props.keyStore.getAddresses()[0];
        const web3 = this.props.web3
        web3.eth.getBalance(address, (e, res) => {
            // console.log(res)
            this.props.handleClick(res)
        })
    }

    render() {
        return (
        <div>
            <p>ETH</p>
            <p>{this.props.balance}</p>
            {/*<button onClick={this.handleRefresh()}> Refresh</button>*/}
        </div>
        )
    }
}