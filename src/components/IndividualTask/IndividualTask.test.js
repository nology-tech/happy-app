import React from "react";
import { render } from "@testing-library/react";
import IndividualTask from "./IndividualTask";

describe("IndividualTask tests", () => {
  it("should render", () => {
    expect(render(<IndividualTask />)).toBeTruthy();
  });
});
