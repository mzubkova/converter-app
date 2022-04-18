import { createSelector } from "reselect";
import { ApplicationState } from "../types";
import * as Types from "./types";

export const getCurrencyState = (
  state: ApplicationState
): Types.ICurrencyStore => state.currency;
export const getExchangeRatesState = createSelector(
  getCurrencyState,
  (currency: Types.ICurrencyStore): Array<any> => currency.exchange_rates
);
export const getIsLoading = createSelector(
  getCurrencyState,
  (currency: Types.ICurrencyStore): boolean => currency.isLoading
);
