import "babel-polyfill";
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './containers/index'

import configureStore from './store/configureStore'
import configureWallet from './utils/Wallet'

const store = configureStore()
configureWallet(store)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

// const address = wallet.keyStore.getAddresses()[0]
//
// wallet.web3.eth.getBalance(address, (e, res) => {
//
//     console.log(e)
//     console.log("address: " + address)
//     console.log("balance: " + res)
//
//     store.dispatch(updateAddress(address))
//
//     render(
//         <Provider store={store}>
//             <App web3={wallet.web3} keyStore={wallet.keyStore}/>
//         </Provider>,
//         document.getElementById('app')
//     );
// })

