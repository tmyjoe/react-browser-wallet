import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

function balanceReducer(state = {balance: 0, address: ""}, action) {
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

/**
 * Note: state structure will follow the reducers structure.
 * So, these should be splited to the domain structure.
 *
 * If cross reducer value reference needed.
 * see http://redux.js.org/docs/recipes/reducers/BeyondCombineReducers.html
 */
const rootReducer = combineReducers({
    balance: balanceReducer,
    form: formReducer
})

export default rootReducer;