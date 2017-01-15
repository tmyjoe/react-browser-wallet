import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import wallet from '../reducers/wallet';
import balance from '../reducers/balance';

/**
 * Note: state structure will follow the reducers structure.
 * So, these should be splited to the domain structure.
 *
 * If cross reducer value reference needed.
 * see http://redux.js.org/docs/recipes/reducers/BeyondCombineReducers.html
 */
const rootReducer = combineReducers({
    wallet,
    balance,
    form: formReducer
})

export default rootReducer;
