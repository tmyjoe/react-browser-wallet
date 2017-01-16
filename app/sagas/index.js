import {call, put, fork, take, select, takeEvery, takeLatest} from 'redux-saga/effects'

import {successBalanceRefresh, failureBalanceRefresh} from '../actions/index.js'
import * as types from '../constants/ActionTypes'

export const web3Selecter = (state) => state.web3
export const addressSelector = (state) => state.balance.address

function getBalance(web3, address) {
  return new Promise((resolve, reject) => {
      web3.eth.getBalance(address, (e, res) => {
        if (e !== null) return reject(e);
        resolve(res);
      })
    }
  )
}

function* handleRefreshBalance() {
  while (true) {

    const action = yield take(types.REFRESH_BALANCE);
    const web3 = yield select(web3Selecter);
    const address = yield select(addressSelector);

    console.log(address)

    const res = yield call(getBalance, web3, "0x874b54a8bd152966d63f706bae1ffeb0411921e5");

    if (typeof res !== "undefined") {
      yield put(successBalanceRefresh(res.toNumber()));
    } else {
      yield put(failureBalanceRefresh(res));
    }
  }
}

function* rootSaga() {
  yield fork(handleRefreshBalance);
}

export default rootSaga
