import React from "react";
import { render } from "@testing-library/react";
import AllTasks from "./AllTasks";

describe("AllTasks tests", () => {
  it("should render", () => {
    expect(render(<AllTasks />)).toBeTruthy();
  });
});
