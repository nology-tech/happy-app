import React from "react";
import { render } from "@testing-library/react";
import LifeComponentList from "./LifeComponentList";

describe("LifeComponentList tests", () => {
  it("should render", () => {
    expect(render(<LifeComponentList />)).toBeTruthy();
  });
});
