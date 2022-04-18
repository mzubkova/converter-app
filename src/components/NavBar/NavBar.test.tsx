import * as React from "react";
import NavBar from "../NavBar";
import { shallowRender, mockStore } from "../../../__tests__/helpers";
import { initialState } from "../../store/currency/reducer";
import { screen } from "@testing-library/react";

describe("NavBar", () => {
  let initialStore = {};
  let component: any;
  beforeEach(() => {
    initialStore = mockStore({ currency: initialState });
    component = shallowRender(<NavBar />, initialStore);
  });
  it("should render without crashing", () => {
    expect(component).toMatchSnapshot();
  });
  it("should mount h1", () => {
    expect(screen.getByTestId("nav-bar")).toBeInTheDocument();
  });
});
