import React, { Component } from 'react';


export default class Balance extends Component {

    render() {
        return (
            <div>
                <p>{this.props.address}</p>
                <p>ETH</p>
                <p>{this.props.balance}</p>
                <button onClick={() => this.props.onRefreshClick()}> Refresh</button>
                <img src="../sample.png" />
            </div>
        );
    }
}

Balance.propTypes = {
    address: React.PropTypes.string,
    balance: React.PropTypes.number
};