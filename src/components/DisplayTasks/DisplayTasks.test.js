import React from "react";
import { render } from "@testing-library/react";
import DisplayTasks from "./DisplayTasks";

describe("DisplayTasks tests", () => {
  it("should render", () => {
    expect(render(<DisplayTasks />)).toBeTruthy();
  });
});
