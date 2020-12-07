import React from "react";
import { render } from "@testing-library/react";
import GraphIcons from "./GraphIcons";

describe("GraphIcons tests", () => {
  it("should render", () => {
    expect(render(<GraphIcons />)).toBeTruthy();
  });
});
