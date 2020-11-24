import React from "react";
import { render } from "@testing-library/react";
import NumericScore from "./NumericScore";

describe("NumericScore tests", () => {
  it("should render", () => {
    expect(render(<NumericScore />)).toBeTruthy();
  });
});
