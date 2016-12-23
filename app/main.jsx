import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import lightwalelt from 'eth-lightwallet';
import Web3 from 'web3';
import HookedWeb3Provider from 'hooked-web3-provider';

import App from './container/balance'
import reducer from './reducer/reducer'

const store = createStore(reducer)

const keyStore = lightwalelt.keystore
const web3 = new Web3()

const password = "password1!"


keyStore.createVault({
    password: password,
}, function (err, ks) {
    console.log(err)

    console.log(ks)
    // Some methods will require providing the `pwDerivedKey`,
    // Allowing you to only decrypt private keys on an as-needed basis.
    // You can generate that value with this convenient method:
    ks.keyFromPassword(password, function (err, pwDerivedKey) {
        if (err) throw err;

        // generate five new address/private key pairs
        // the corresponding private keys are also encrypted
        ks.generateNewAddress(pwDerivedKey, 1);
        var addr = ks.getAddresses();

        console.log(addr + " created")

        ks.passwordProvider = function (callback) {
            var pw = prompt("Please enter password", "Password");
            callback(null, pw);
        };

        const web3Provider = new HookedWeb3Provider({
            host: "https://ropsten.infura.io/d5qnTomO9clq9Eq2HxUY",
            transaction_signer: ks
        });

        web3.setProvider(web3Provider);

        render(
            <Provider store={store}>
                <App web3={web3} keyStore={ks}/>
            </Provider>,
            document.getElementById('app')
        );

    });
});

// render(
//     <Provider store={store}>
//         <App web3={web3} keyStore={keyStore}/>
//     </Provider>,
//     document.getElementById('app')
// );