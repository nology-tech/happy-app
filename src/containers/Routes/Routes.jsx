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

const Routes = (props) => {
  const { signIn } = props;

  return (
    <Router>
      <About path="about" />
      <AccountSettings path="accountsettings" />
      <Login path="/" signIn={signIn} />
      <Register path="register" />
      <Task path="task" />
      <TermsConditions path="termsconditions" />
      <InitialScorePage path="setscores" />
      <HappinessGraphPage path="happinessgraph" />
    </Router>
  );
};

export default Routes;
