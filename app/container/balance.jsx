import React from 'react'
import { connect } from 'react-redux'

import App from '../component/balance.jsx'
import { refreshBalance } from '../action/balance.jsx'

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: (refreshedBalance) => { dispatch(refreshBalance(refreshedBalance)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)