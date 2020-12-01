import React from "react";
import { render } from "@testing-library/react";
import AccountSettings from "./AccountSettings";

describe("AccountSettings tests", () => {
  it("should render", () => {
    expect(render(<AccountSettings />)).toBeTruthy();
  });
});
