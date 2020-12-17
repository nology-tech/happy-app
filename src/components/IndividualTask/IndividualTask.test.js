import React from "react";
import { render } from "@testing-library/react";
import IndividualTask from "./IndividualTask";


const dummyTask = {
  id: "id",
  isComplete: false
}

describe("IndividualTask tests", () => {
  it("should render", () => {
    expect(render(<IndividualTask task={dummyTask}/>)).toBeTruthy();
  });
});
