import React from "react";
import ScoreDisplay from "./ScoreDisplay";
import getScores from "../../services/getScores.service";
import { mount, shallow } from "enzyme";
import AverageScore from "../../components/AverageScore";
import { act } from "react-dom/test-utils";
import LifeComponent from "../../components/LifeComponent";
jest.mock("../../services/getScores.service", () => jest.fn());

describe("ScoreDisplay tests", () => {
  getScores.mockImplementation(() => {
    return {
      date: {
        seconds: 1612349540,
        nanoseconds: 620000000,
        toDate: "ƒ () {}",
        toMillis: "ƒ () {}",
        dt: "ƒ () {}",
        isEqual: "ƒ () {}",
        toString: "ƒ () {}",
        toJSON: "ƒ () {}",
        valueOf: "ƒ () {}"
      },
      lifeComponentScores: [
        {
          score: 1,
          name: "Physical Environment"
        },
        {
          name: "Finances",
          score: 1
        },
        {
          name: "Career",
          score: 1
        },
        {
          score: 1,
          name: "General Happiness"
        },
        {
          name: "Mental Health",
          score: 1
        },
        {
          score: 1,
          name: "Physical Health"
        },
        {
          name: "Friends",
          score: 1
        },
        {
          name: "Family",
          score: 1
        },
        {
          score: 1,
          name: "Love Life"
        },
        {
          score: 1,
          name: "Spirituality"
        },
        {
          score: 1,
          name: "Purpose"
        },
        {
          name: "Self Worth",
          score: 1
        },
        {
          name: "Fun and Recreation",
          score: 1
        },
        {
          name: "Contribution to Society",
          score: 1
        },
        {
          name: "Personal Development",
          score: 1
        }
      ]
    };
  });

  let component;
  act(() => {
    component = mount(<ScoreDisplay user={true} />);
  });
  jest.useFakeTimers();
  it("Should update score state on user prop change", () => {
    expect(component.find(LifeComponent).length).toBe(0);

    act(() => {
      component.setProps({ user: true });
      jest.runAllTicks();
    });

    expect(component.find(LifeComponent).length).toBe(15);
  });
});
