import * as React from "react";
import CurrencyConverter from "./CurrencyConverter";
import { shallowRender, mockStore } from "../../../__tests__/helpers";
import { exchangeRatesData } from "../../../__mocks__/currency";
import { initialState } from "../../store/currency/reducer";
import { screen, fireEvent } from "@testing-library/dom";

describe("CurrencyConverter", () => {
  let initialStore = {};
  let component: any;
  let props;
  beforeEach(() => {
    props = {
      exchange_rates: exchangeRatesData,
      getExchangeRates: jest.fn(),
    };
    initialStore = mockStore({ currency: initialState });
    component = shallowRender(<CurrencyConverter {...props} />, initialStore);
  });
  it("should render without crashing", () => {
    expect(component).toMatchSnapshot();
  });
  it("should call button", () => {
    const button = screen.getByTestId("btn-save");
    const input = screen.getByLabelText(/Enter currency/i);
    fireEvent.change(input, {
      target: {
        value: "text",
      },
    });
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});
