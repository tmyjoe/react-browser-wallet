import React, { Component } from 'react';


export default class Balance extends Component {

    render() {
        console.log(this.props)
        return (  <div>
            <span>ETH</span>
            <span>{this.props.balance}</span>
            <button onClick={() => this.props.handleClick()}> Refresh</button>
        </div>
        );
    }
}