import React from "react";
import { render } from "@testing-library/react";
import ProgressBar from "./ProgressBar";

describe("ProgressBar tests", () => {
  it("should render", () => {
    expect(render(<ProgressBar />)).toBeTruthy();
  });
});
