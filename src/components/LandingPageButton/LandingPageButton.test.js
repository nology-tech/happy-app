import React from "react";
import { render } from "@testing-library/react";
import LandingPageButton from "./LandingPageButton";

describe("LandingPageButton tests", () => {
  it("should render", () => {
    expect(render(<LandingPageButton />)).toBeTruthy();
  });
});
