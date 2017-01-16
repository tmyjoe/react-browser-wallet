import * as types from '../constants/ActionTypes'

/*
 * Action creators
 */
export function updateAddress(address) {
    return { type: types.UPDATE_ADDRESS, address: address }
}

export function refreshBalance() {
    return { type: types.REFRESH_BALANCE}
}


export function successBalanceRefresh(balance) {
  return { type: types.BALANCE_REFRESHED, balance: balance }
}

export function failureBalanceRefresh(error) {
  //TODO:
  return null
}

export function walletCreated(keyStore, web3) {
    return { type: types.WALLET_CREATED, keyStore, web3 }
}
