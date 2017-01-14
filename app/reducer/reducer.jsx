const initialState = {
    balance: 0,
    address: ""
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'REFRESH_BALANCE':
            return Object.assign({}, state, {
                balance: action.balance,
            });
        case 'UPDATE_ADDRESS':
            return Object.assign({}, state, {
                address: action.address,
            });
        default:
            return state
    }
}
