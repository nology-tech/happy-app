import React from "react";
import { render } from "@testing-library/react";
import TaskInput from "./TaskInput";

describe("TaskInput tests", () => {
  it("should render", () => {
    expect(render(<TaskInput />)).toBeTruthy();
  });
});
