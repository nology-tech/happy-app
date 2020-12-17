import React from "react";
import { render } from "@testing-library/react";
import CareerDeepDive from "./CareerDeepDive";

describe("CareerDeepDive tests", () => {
  it("should render", () => {
    expect(render(<CareerDeepDive />)).toBeTruthy();
  });
});
