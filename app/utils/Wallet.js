import lightwalelt from 'eth-lightwallet';
import Web3 from 'web3';
import HookedWeb3Provider from 'hooked-web3-provider';

import localStorageUtils from './LocalStorageUtils';
import * as lsKeys from '../constants/LocalStorageKeys';

export default function configureWallet() {
    const keyStore = lightwalelt.keystore
    const web3 = new Web3()

    const password = "password1!"
    const seed = "element concert board toddler kingdom clown that choice process ugly language reform"
    const salt = "QH26xdbSJjBJe0G73JUpDK0l2oVBr4TyiXiP904HmrQ="

    const ks = keyStore.deserialize(localStorageUtils.get(lsKeys.WALLET))

    const web3Provider = new HookedWeb3Provider({
        host: "https://ropsten.infura.io/d5qnTomO9clq9Eq2HxUY",
        transaction_signer: ks
    });

    web3.setProvider(web3Provider)

    const address = ks.getAddresses()[0];

    console.log(ks)
    return {web3: web3, keyStore: ks}
}

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
