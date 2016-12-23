import React from 'react'
import { connect } from 'react-redux'
import App from '../component/balance.jsx'
import { refreshBalance } from '../action/balance.jsx'

function mapStateToProps(state, ownProps) {
    return state
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        handleClick: () => {
            const ks = ownProps.keyStore
            const web3 = ownProps.web3

            console.log("handleRefresh")
            const address = ks.getAddresses()[0];
            web3.eth.getBalance(address, (e, res) => {
                console.log(res)
                dispatch(refreshBalance(res.toNumber()))
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)