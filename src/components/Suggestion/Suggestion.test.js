import React from "react";
import { render } from "@testing-library/react";
import Suggestion from "./Suggestion";

describe("Suggestion tests", () => {
  it("should render", () => {
    expect(render(<Suggestion />)).toBeTruthy();
  });
});
