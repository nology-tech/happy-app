import React from "react";
import { render } from "@testing-library/react";
import Scores from "./Scores";

describe("Scores tests", () => {
  it("should render", () => {
    expect(render(<Scores />)).toBeTruthy();
  });
});
