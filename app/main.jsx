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

const seed = "element concert board toddler kingdom clown that choice process ugly language reform"
const salt = "QH26xdbSJjBJe0G73JUpDK0l2oVBr4TyiXiP904HmrQ="

// keyStore.createVault({
//     password: password,
//     seedPhase: seed,
//     salt: salt
// }, (err, ks) => {
//     console.log(err)
//
//     console.log(ks)
//     // Some methods will require providing the `pwDerivedKey`,
//     // Allowing you to only decrypt private keys on an as-needed basis.
//     // You can generate that value with this convenient method:
//     ks.keyFromPassword(password, function (err, pwDerivedKey) {
//         if (err) throw err;
//
//         // generate five new address/private key pairs
//         // the corresponding private keys are also encrypted
//         ks.generateNewAddress(pwDerivedKey, 1);
//         var addr = ks.getAddresses();
//
//         console.log(addr + " created")
//
//         ks.passwordProvider = function (callback) {
//             var pw = prompt("Please enter password", "Password");
//             callback(null, pw);
//         };
//
//         console.log(ks.serialize())
//
//         localStorage.setItem("wallet", ks.serialize())
//
//         const web3Provider = new HookedWeb3Provider({
//             host: "https://ropsten.infura.io/d5qnTomO9clq9Eq2HxUY",
//             transaction_signer: ks
//         });
//
//         web3.setProvider(web3Provider);
//
//         render(
//             <Provider store={store}>
//                 <App web3={web3} keyStore={ks}/>
//             </Provider>,
//             document.getElementById('app')
//         );
//
//     });
// });


const ks = keyStore.deserialize(localStorage.getItem("wallet"))

const web3Provider = new Web3.providers.HttpProvider("https://ropsten.infura.io/d5qnTomO9clq9Eq2HxUY")
// const web3Provider = new Web3.providers.HttpProvider("http://localhost:8545")
//
// const web3Provider = new HookedWeb3Provider({
//     host: "https://ropsten.infura.io/d5qnTomO9clq9Eq2HxUY",
//     transaction_signer: ks
// });

web3.setProvider(web3Provider)

const address = ks.getAddresses()[0];
console.log(address)

web3.eth.getBalance("0x874b54a8bd152966d63f706bae1ffeb0411921e5", (e, res) => {
    console.log(e)
    console.log("balance " + res)

    render(
        <Provider store={store}>
            <App web3={web3} keyStore={ks}/>
        </Provider>,
        document.getElementById('app')
    );
})
