import React from "react";
import { render } from "@testing-library/react";
import HappinessGraphPage from "./HappinessGraphPage";

describe("HappinessGraphPage tests", () => {
  it("should render", () => {
    expect(render(<HappinessGraphPage />)).toBeTruthy();
  });
});
