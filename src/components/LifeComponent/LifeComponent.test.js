import React from "react";
import { render } from "@testing-library/react";
import LifeComponent from "./LifeComponent";

describe("LifeComponent tests", () => {
  it("should render", () => {
    expect(render(<LifeComponent />)).toBeTruthy();
  });
});
