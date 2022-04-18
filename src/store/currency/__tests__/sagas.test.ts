/*eslint no-undef: 0*/
import { testSaga } from "redux-saga-test-plan";
import * as actions from "../actions";
import * as sagas from "../sagas";
import watchers from "../sagas";
import { getRequest } from "../../../api/index";

describe("currency sagas", () => {
  describe("getExchangeRates", () => {
    const response = [];
    it("getExchangeRates success", () => {
      testSaga(sagas.getExchangeRates)
        .next()
        .call(getRequest)
        .next(response)
        .put(actions.getExchangeRatesSuccess([]))
        .next()
        .isDone();
    });
    it("getExchangeRatesError error", () => {
      testSaga(sagas.getExchangeRates)
        .next()
        .call(getRequest)
        .throw(new Error())
        .put(actions.getExchangeRatesError())
        .next()
        .isDone();
    });
  });
  describe("watchers", () => {
    it("should watchers", () => {
      testSaga(watchers)
        .next()
        .takeEvery("@@currency/GET_EXCHANGE_RATES", sagas.getExchangeRates)
        .finish()
        .isDone();
    });
  });
});
