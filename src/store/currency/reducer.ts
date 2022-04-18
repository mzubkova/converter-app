import { Reducer } from "redux";
import { ActionTypes as AT } from "./actionTypes";
import * as Types from "./types";

export const initialState: Types.ICurrencyStore = {
  exchange_rates: [],
  isLoading: false,
};

export const currencyReducer: Reducer<
  Types.ICurrencyStore,
  Types.TCurrencyActions
> = (state = initialState, action) => {
  switch (action.type) {
    case AT.GET_EXCHANGE_RATES:
      return {
        ...state,
        isLoading: true,
      };
    case AT.GET_EXCHANGE_RATES_SUCCESS:
      return {
        ...state,
        exchange_rates: action.payload,
        isLoading: false,
      };
    case AT.GET_EXCHANGE_RATES_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
