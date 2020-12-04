import React from "react";
import { render } from "@testing-library/react";
import Filler from "./Filler";

describe("Filler tests", () => {
  it("should render", () => {
    expect(render(<Filler />)).toBeTruthy();
  });
});
