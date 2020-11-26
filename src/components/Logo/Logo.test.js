import React from "react";
import { render } from "@testing-library/react";
import Logo from "./Logo";

describe("Logo tests", () => {
  it("should render", () => {
    expect(render(<Logo />)).toBeTruthy();
  });
});
