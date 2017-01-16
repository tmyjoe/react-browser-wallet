import * as types from '../constants/ActionTypes';

export default function keyStoreReducer(state = null, action) {
  switch (action.type) {
    case types.WALLET_CREATED:
      return action.keyStore
    default:
      return state
  }
}
