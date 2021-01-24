import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";
import lifeComponents from "../../data/lifeComponents";

describe("Footer tests", () => {
  it("should render", () => {
    expect(render(<Footer scores={lifeComponents} />)).toBeTruthy();
  });
});
