import React from "react";
import { render } from "@testing-library/react";
import AverageScore from "./AverageScore";

describe("AverageScore tests", () => {
  it("should render", () => {
    expect(render(<AverageScore />)).toBeTruthy();
  });
});
