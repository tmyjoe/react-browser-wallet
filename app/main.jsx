import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './container/index'
import { updateAddress } from './actions'
import configureStore from './store/configureStore'
import configureWallet from './wallet'

const store = configureStore()
const wallet = configureWallet()

const address = wallet.keyStore.getAddresses()[0]

wallet.web3.eth.getBalance(address, (e, res) => {

    console.log(e)
    console.log("address: " + address)
    console.log("balance: " + res)

    store.dispatch(updateAddress(address))

    render(
        <Provider store={store}>
            <App web3={wallet.web3} keyStore={wallet.keyStore}/>
        </Provider>,
        document.getElementById('app')
    );
})

