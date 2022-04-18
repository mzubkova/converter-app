import * as React from "react";
import MainLayout from "../MainLayout";
import { shallowRender, mockStore } from "../../../__tests__/helpers";
import { initialState } from "../../store/currency/reducer";
import { screen } from "@testing-library/react";

describe("MainLayout", () => {
  let initialStore = {};
  let component: any;
  beforeEach(() => {
    initialStore = mockStore({ currency: initialState });
    component = shallowRender(<MainLayout />, initialStore);
  });
  it("should render without crashing", () => {
    expect(component).toMatchSnapshot();
  });
  it("should mount text in button", () => {
    expect(screen.getByRole("button").textContent).toBe("Convert");
  });
  it("should mount h1", () => {
    expect(screen.getByTestId("header-title")).toBeInTheDocument();
  });
});
