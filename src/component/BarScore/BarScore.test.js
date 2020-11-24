import React from "react";
import { render } from "@testing-library/react";
import BarScore from "./BarScore";

describe("BarScore tests", () => {
  it("should render", () => {
    expect(render(<BarScore />)).toBeTruthy();
  });
});
