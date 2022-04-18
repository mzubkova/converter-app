import { ActionType } from "typesafe-actions";
import * as Actions from "./actions";

export type IExchangeRate = {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
};

export type ICurrencyStore = {
  exchange_rates: Array<IExchangeRate>;
  isLoading: boolean;
};

type TActions = typeof Actions;

export type TCurrencyActions = ActionType<TActions>;
