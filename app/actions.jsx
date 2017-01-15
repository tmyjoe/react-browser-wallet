/*
 * Action types
 */
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
export const REFRESH_BALANCE = 'REFRESH_BALANCE'


/*
 * Action creators
 */
export function updateAddress(address) {
    return { type: UPDATE_ADDRESS, address: address }
}

export function refreshBalance(balance) {
    return { type: REFRESH_BALANCE, balance: balance }
}

