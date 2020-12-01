import React from "react";
import { render } from "@testing-library/react";
import TasksPage from "./TasksPage";

describe("TasksPage tests", () => {
    it("should render", () => {
        expect(render( < TasksPage / > )).toBeTruthy();
    });
});