import React from "react";
import { render } from "@testing-library/react";
import ScoreDisplay from "./ScoreDisplay";

describe("ScoreDisplay tests", () => {
  it("should render", () => {
    expect(render(<ScoreDisplay />)).toBeTruthy();
  });
});
