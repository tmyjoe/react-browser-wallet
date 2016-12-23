import React from 'react'
import { connect } from 'react-redux'
import App from '../component/balance.jsx'
import { refreshBalance } from '../action/balance.jsx'

import lightwalelt from 'eth-lightwallet';

let password = 'password1!';
let keyStore = lightwalelt.keystore

keyStore.createVault({
    password: password,
}, function (err, ks) {
    console.log(ks)
    // Some methods will require providing the `pwDerivedKey`,
    // Allowing you to only decrypt private keys on an as-needed basis.
    // You can generate that value with this convenient method:
    ks.keyFromPassword(password, function (err, pwDerivedKey) {
        if (err) throw err;

        // generate five new address/private key pairs
        // the corresponding private keys are also encrypted
        ks.generateNewAddress(pwDerivedKey, 5);
        var addr = ks.getAddresses();

        console.log(addr + " created")

        ks.passwordProvider = function (callback) {
            var pw = prompt("Please enter password", "Password");
            callback(null, pw);
        };
    });
});

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: (refreshedBalance) => { dispatch(refreshBalance(refreshedBalance)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)