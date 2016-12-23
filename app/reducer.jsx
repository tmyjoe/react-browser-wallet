const initialState = {
    balance: 0
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'REFRESH_BALANCE':
            return { balance: action.value }
        default:
            return state
    }
}
