import React from "react";
import { render } from "@testing-library/react";
import User from "./User";

describe("User tests", () => {
  it("should render", () => {
    expect(render(<User />)).toBeTruthy();
  });
});
