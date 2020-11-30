import React from "react";
import { render } from "@testing-library/react";
import TermsConditions from "./TermsConditions";

describe("TermsConditions tests", () => {
  it("should render", () => {
    expect(render(<TermsConditions />)).toBeTruthy();
  });
});
