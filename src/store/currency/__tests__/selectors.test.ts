import { ApplicationState } from "../../types";
import { initialState } from "../reducer";
import * as selector from "../selectors";

describe("weather selectors", () => {
  const state: ApplicationState = { currency: initialState };
  beforeEach(() => {
    state.currency = {
      exchange_rates: [],
      isLoading: false,
    };
  });
  it("getCurrencyState should work correctly", () => {
    expect(selector.getCurrencyState(state)).toEqual(state.currency);
  });
  it("getExchangeRatesState should work correctly", () => {
    expect(selector.getExchangeRatesState(state)).toEqual(
      state.currency.exchange_rates
    );
  });
  it("getIsLoading should work correctly", () => {
    expect(selector.getIsLoading(state)).toEqual(false);
  });
});
