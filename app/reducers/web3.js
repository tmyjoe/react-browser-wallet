import * as types from '../constants/ActionTypes';

export default function web3Reducer(state = null, action) {
  switch (action.type) {
    case types.WALLET_CREATED:
      return action.web3
    default:
      return state
  }
}
