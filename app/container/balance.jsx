import React, { Component } from 'react'
import { connect } from 'react-redux'

import Sendform from '../component/sendform.jsx'
import Balance from '../component/balance.jsx'
import { refreshBalance } from '../actions.jsx'

class RootContainer extends Component {
    render() {
        return (
            <div>
                <Sendform />
                <Balance
                    address={this.props.address}
                    balance={this.props.balance}
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
            const ks = ownProps.keyStore
            const web3 = ownProps.web3
            const address = ks.getAddresses()[0];

            web3.eth.getBalance(address, (e, res) => {
                console.log(res)
                dispatch(refreshBalance(res.toNumber()))
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)