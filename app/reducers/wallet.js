import * as types from '../constants/ActionTypes';

const initialState = {
  keyStore: null,
  web3: null
}

/**
 * Reducer for balance components
 */
export default function walletReducer(state = initialState, action) {
  switch (action.type) {
    case types.WALLET_CREATED:
      return Object.assign({}, state, {
        keyStore: action.keyStore,
        web3: action.web3
      });
    default:
      return state
  }
}
