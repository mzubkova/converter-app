import * as React from "react";
import { shallowRender, mockStore } from "../../../__tests__/helpers";
import { exchangeRatesData } from "../../../__mocks__/currency";
import { initialState } from "../../store/currency/reducer";
import App from "./index";

describe("App", () => {
  let initialStore = {};
  let component: any;
  let props;
  beforeEach(() => {
    props = {
      exchange_rates: exchangeRatesData,
    };
    initialStore = mockStore({ currency: initialState });
    component = shallowRender(<App {...props} />, initialStore);
  });
  it("should render without crashing", () => {
    expect(component).toMatchSnapshot();
  });
});
