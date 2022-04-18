import { put, takeEvery, call } from "redux-saga/effects";
import { ActionTypes as AT } from "./actionTypes";
import { SagaIterator } from "@redux-saga/core";
import * as actions from "./actions";
import * as request from "../../api/index";

export function* getExchangeRates(): SagaIterator {
  try {
    const data = yield call(request.getRequest);
    yield put(actions.getExchangeRatesSuccess(data));
  } catch {
    yield put(actions.getExchangeRatesError());
  }
}

export default function* actionWatcher(): SagaIterator {
  yield takeEvery(AT.GET_EXCHANGE_RATES, getExchangeRates);
}
