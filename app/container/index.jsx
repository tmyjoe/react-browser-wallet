import React, { Component } from 'react'
import { connect } from 'react-redux'

import Sendform from '../component/sendform.jsx'
import Balance from '../component/balance.jsx'
import {refreshBalance} from '../actions.js'

class RootContainer extends Component {
  render() {
    const {address, balance, handleSubmit, handleClick} = this.props;

    return (
      <div>
        <Sendform
          onSubmit={handleSubmit}
        />
        <Balance
          onRefreshClick={handleClick}
          address={address}
          balance={balance}/>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const {address, balance} = state.balance;

  return {
    address,
    balance
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  const ks = ownProps.keyStore
  const web3 = ownProps.web3

  return {
    handleClick: () => {
      console.log("handleClick")
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

/**
 * Connect is a function to connect redux state to the component as prop.
 * So, Connect will merge states and props, if we need to avoid confilicts,
 * ownProps argutments represent props of components, then we can handle it here.
 */
export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
