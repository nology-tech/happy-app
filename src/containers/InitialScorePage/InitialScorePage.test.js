import React from "react";
import { render } from "@testing-library/react";
import InitialScorePage from "./InitialScorePage";

describe("InitialScorePage tests", () => {
  it("should render", () => {
    expect(render(<InitialScorePage />)).toBeTruthy();
  });
});
