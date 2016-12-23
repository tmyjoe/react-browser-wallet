const initialState = {
    balance: 0
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'REFRESH_BALANCE':
            console.log("reduce")
            return { balance: action.balance }
        default:
            return state
    }
}
