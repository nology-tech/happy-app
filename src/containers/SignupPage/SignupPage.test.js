import React from "react";
import { render } from "@testing-library/react";
import SignupPage from "./SignupPage";

describe("SignupPage tests", () => {
  it("should render", () => {
    expect(render(<SignupPage />)).toBeTruthy();
  });
});
