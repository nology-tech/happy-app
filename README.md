# Happy

This app was created, built and designed by Nology everest intakes in collaboration with Darren Ryemill.

Happy, has been built as a web app to help people keep track of their general wellbeing and happiness.

The first prototype can be found [Here](happy-app-86830.web.app/).

## Getting Started

- First, clone the repo onto your local computer - `git clone https://github.com/nology-tech/happy-app.git`

- Then, install [yarn](https://yarnpkg.com/en/docs/getting-started) as your package manager.
- Then, run `yarn install` within the project folder and it will install all of the dependencies.

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Tests

This project used [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)

#### `yarn run test`

Launches the test runner.<br>

Code example:

```
import React from "react";
import { render } from "@testing-library/react";
import X from "X";

describe("AverageScore tests", () => {
  it("should render", () => {
    expect(render(<X />)).toBeTruthy();
  });
});

```

## Deployment

To ensure code quality, Github Actions was set up at the beginning of the project. Before each merge, Github Actions would check the code against the locally written tests and check if code would compile. If all the tests passed Github Actions would automatically deploy.

## Tech Stack

Developing the app, the following technologies have been used:

- React
- GitHub/Git
- Enzyme
- Github Actions
- Sass
- Firebase
- Reach Router
- NPM/Yarn

## Features

### Features in:

- Authentication
- Setting life component scores
- Overall life component scores
- Initial career deep dive
- Graph showcasing total scores
- Set / Delete / CheckCompleted tasks
- Data for scores and tasks saved to firebase

### Features not-in:

- Week / Month view of scores
- App features tutorial
- Trust pilot section

### Bugs:

- Holdover console.logs

## Built By

This app was created, built and designed by ology everest intakes in collaboration with Darren Ryemill.
