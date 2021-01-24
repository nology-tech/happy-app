import React from "react";
import { render } from "@testing-library/react";
import LifeComponentList from "./LifeComponentList";

describe("LifeComponentList tests", () => {
  it("should render", () => {
    const scores = [
      {
        text: "Life component",
        score: "2",
        id: 1 
      }];
    expect(render(<LifeComponentList scores={scores} />)).toBeTruthy();
  });
});