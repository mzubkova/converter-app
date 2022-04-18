import * as React from "react";
import CurrencyList, { TCurrencyList } from "./CurrencyList";
import { shallowRender, mockStore } from "../../../__tests__/helpers";
import { exchangeRatesData } from "../../../__mocks__/currency";
import { initialState } from "../../store/currency/reducer";
import { screen } from "@testing-library/dom";

describe("CurrencyList", () => {
  let initialStore = {};
  let component: any;
  let props: TCurrencyList;
  beforeEach(() => {
    props = {
      exchange_rates: exchangeRatesData,
    };
    initialStore = mockStore({ currency: initialState });
    component = shallowRender(<CurrencyList {...props} />, initialStore);
  });
  it("should render without crashing", () => {
    expect(component).toMatchSnapshot();
  });
  it("should mount button", () => {
    expect(screen.getByTestId("btn-save")).toBeInTheDocument();
  });
});
