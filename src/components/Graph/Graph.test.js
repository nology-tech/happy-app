import React from "react";
import { render } from "@testing-library/react";
import Graph from "./Graph";

describe("Graph tests", () => {
  it("should render", () => {
    expect(render(<Graph />)).toBeTruthy();
  });
});
