import React from "react";
import { render } from "@testing-library/react";
import TaskList from "./TaskList";

describe("TaskList tests", () => {
    it("should render", () => {
        expect(render( < TaskList / > )).toBeTruthy();
    });
});