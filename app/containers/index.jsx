import React, { Component } from 'react'
import { connect } from 'react-redux'

import Sendform from '../components/Sendform.jsx'
import Balance from '../components/Balance.jsx'
import { refreshBalance } from '../actions/index.js'

class RootContainer extends Component {

  render() {
    const {address, balance, handleSubmit, handleClick, web3, keyStore} = this.props;

    return (
      <div>
        <Sendform
          onSubmit={handleSubmit}
        />
        <Balance
          onRefreshClick={handleClick}
          address={address}
          balance={balance}
          web3={web3}
          keyStore={keyStore}
        />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {

  console.log("satetProps")

  const {web3, keyStore} = state;
  const {address, balance} = state.balance;

  return {
    address,
    balance,
    web3,
    keyStore
  }
}

function mapDispatchToProps(dispatch, ownProps) {

  return {
    handleClick: () => {
      console.log(ownProps.address)
      dispatch(refreshBalance())
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
