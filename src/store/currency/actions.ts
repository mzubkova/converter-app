import { action } from "typesafe-actions";
import { ActionTypes as AT } from "./actionTypes";
import { IExchangeRate } from "./types";

export const getExchangeRates = () => action(AT.GET_EXCHANGE_RATES);
export const getExchangeRatesSuccess = (payload: Array<IExchangeRate>) =>
  action(AT.GET_EXCHANGE_RATES_SUCCESS, payload);
export const getExchangeRatesError = () => action(AT.GET_EXCHANGE_RATES_ERROR);
