export function updateAddress(address) {
    return { type: 'UPDATE_ADDRESS', address: address }
}

export function refreshBalance(balance) {
    return { type: 'REFRESH_BALANCE', balance: balance }
}

