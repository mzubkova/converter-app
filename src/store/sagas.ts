import { all } from "@redux-saga/core/effects";
import getExchangeRates from "./currency/sagas";

export default function* rootSaga() {
  yield all([getExchangeRates()]);
}
