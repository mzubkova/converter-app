import * as actions from "../actions";
import { initialState, currencyReducer } from "../reducer";

describe("currencyReducer", () => {
  it("should return the initial state", () => {
    expect(currencyReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle GET_EXCHANGE_RATES", () => {
    expect(currencyReducer(initialState, actions.getExchangeRates())).toEqual({
      ...initialState,
      isLoading: true,
    });
  });
  it("should handle GET_EXCHANGE_RATES_SUCCESS", () => {
    expect(
      currencyReducer(initialState, actions.getExchangeRatesSuccess([]))
    ).toEqual({
      ...initialState,
      exchange_rates: [],
      isLoading: false,
    });
  });
  it("should handle GET_EXCHANGE_RATES_ERROR", () => {
    expect(
      currencyReducer(initialState, actions.getExchangeRatesError())
    ).toEqual({
      ...initialState,
      isLoading: false,
    });
  });
});
