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
import PrivateRoutes from "../../containers/PrivateRoutes";
import ScoreDisplay from "../ScoreDisplay";

const Routes = (props) => {
  const { signIn, user } = props;

  return (
    <Router>
      <About path="about" />
      <Login path="/" signIn={signIn} />
      <Register path="register" />
      <PrivateRoutes path="/">
        <Task path="task" />
        <InitialScorePage path="setscores" />
        <HappinessGraphPage path="happinessgraph" />
        <AccountSettings path="accountsettings" />
        <ScoreDisplay user={user} path="scoredisplay" />
      </PrivateRoutes>
      <TermsConditions path="termsconditions" />
    </Router>
  );
};

export default Routes;
