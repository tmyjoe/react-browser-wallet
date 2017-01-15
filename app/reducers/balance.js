import * as types from '../constants/ActionTypes';

const initialState = {
  balance: 0,
  address: null
}

/**
 * Reducer for balance components
 */
export default function balanceReducer(state = initialState, action) {
  switch (action.type) {
    case types.REFRESH_BALANCE:
      return Object.assign({}, state, {
        balance: action.balance,
      });
    case types.UPDATE_ADDRESS:
      return Object.assign({}, state, {
        address: action.address,
      });
    default:
      return state
  }
}
