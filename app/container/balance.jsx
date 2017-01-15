import React, { Component } from 'react'
import { connect } from 'react-redux'

import Sendform from '../component/sendform.jsx'
import Balance from '../component/balance.jsx'
import { refreshBalance } from '../actions.jsx'

class RootContainer extends Component {
    render() {
        return (
            <div>
                <Sendform
                    onSubmit={this.props.handleSubmit}
                />
                <Balance
                    address={this.props.balance.address}
                    balance={this.props.balance.balance}
                    onRefreshClick={this.props.handleClick}
                />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return state
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        handleClick: () => {
            console.log("handleClick")

            const ks = ownProps.keyStore
            const web3 = ownProps.web3
            const address = ks.getAddresses()[0];

            web3.eth.getBalance(address, (e, res) => {
                console.log(res)
                dispatch(refreshBalance(res.toNumber()))
            })
        },
        handleSubmit: () => {
            console.log("submitted")
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)