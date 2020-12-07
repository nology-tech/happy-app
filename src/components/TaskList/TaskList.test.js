import React from "react";
import { render } from "@testing-library/react";
import TaskList from "./TaskList";

describe("TaskList tests", () => {
  const tasks = [
    {
      id: "2", 
      text: "Run Marathon"
    }];
    it("should render", () => {
        expect(render( <TaskList tasks={tasks} /> )).toBeTruthy();
    });
});