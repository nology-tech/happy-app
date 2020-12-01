import React from "react";
import { render } from "@testing-library/react";
import Task from "./Task";

describe("Task tests", () => {
  it("should render", () => {
    expect(render(<Task />)).toBeTruthy();
  });
});
