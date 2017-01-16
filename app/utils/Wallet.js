import lightwallet from 'eth-lightwallet';
import Web3 from 'web3';
import HookedWeb3Provider from 'hooked-web3-provider';

import { walletCreated, updateAddress } from '../actions/index.js'

export default function configureWallet(store) {
  const keyStore = lightwallet.keystore
  const web3 = new Web3()

  const password = "password1!"
  const seed = "element concert board toddler kingdom clown that choice process ugly language reform"
  const salt = "QH26xdbSJjBJe0G73JUpDK0l2oVBr4TyiXiP904HmrQ="

  const hd = "m/0'/0'/0'"

  keyStore.createVault({
    password: password,
    seedPhrase: seed,
    salt: salt,
  }, (err, ks) => {
    console.log(err)
    console.log(ks)

    ks.keyFromPassword(password, function (err, pwDerivedKey) {
      if (err) throw err;

      console.log(pwDerivedKey)
      ks.generateNewAddress(pwDerivedKey, 1);
      var addr = ks.getAddresses()[0];

      console.log(addr + " created")

      const web3Provider = new HookedWeb3Provider({
        host: "https://ropsten.infura.io/d5qnTomO9clq9Eq2HxUY",
        transaction_signer: ks
      });

      web3.setProvider(web3Provider);

      store.dispatch(updateAddress(addr))
      store.dispatch(walletCreated(ks, web3))
    });
  });
}

// export default function configureWallet() {
//     const keyStore = lightwallet.keystore
//     const web3 = new Web3()
//
//     const password = "password1!"
//     const seed = "element concert board toddler kingdom clown that choice process ugly language reform"
//     const salt = "QH26xdbSJjBJe0G73JUpDK0l2oVBr4TyiXiP904HmrQ="
//
//     const ks = keyStore.deserialize(localStorageUtils.get(lsKeys.WALLET))
//
//     const web3Provider = new HookedWeb3Provider({
//         host: "https://ropsten.infura.io/d5qnTomO9clq9Eq2HxUY",
//         transaction_signer: ks
//     });
//
//     web3.setProvider(web3Provider)
//
//
//     const address = ks.getAddresses()[0];
//
//     console.log(ks)
//     return {web3: web3, keyStore: ks}
// }

