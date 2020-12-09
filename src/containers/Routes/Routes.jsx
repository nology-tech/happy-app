import React from "react";
import { Router } from "@reach/router";

import About from "../About";
import AccountSettings from "../AccountSettings";
import Home from "../Home";
import Login from "../Login";
import Register from "../Register";
import Task from "../Task";
import TermsConditions from "../TermsConditions";
import InitialScorePage from "../InitialScorePage";
import HappinessGraphPage from "../HappinessGraphPage";
import ScoreDisplay from "../ScoreDisplay";

const Routes = (props) => {
  const { signIn, user } = props;

  return (
    <Router>
      <About path="about" />
      <AccountSettings path="accountsettings" />
      <Home path="/" />
      <Login path="login" signIn={signIn} />
      <Register path="register" />
      <Task path="task" />
      <TermsConditions path="termsconditions" />
      <InitialScorePage path="setscores" />
      <HappinessGraphPage path="happinessgraph" />
      <ScoreDisplay user={user} path="scoredisplay" />
    </Router>
  );
};

export default Routes;
