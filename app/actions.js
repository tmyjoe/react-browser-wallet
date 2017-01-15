import * as types from './constant/ActionTypes'

/*
 * Action creators
 */
export function updateAddress(address) {
    return { type: types.UPDATE_ADDRESS, address: address }
}

export function refreshBalance(balance) {
    return { type: types.REFRESH_BALANCE, balance: balance }
}

