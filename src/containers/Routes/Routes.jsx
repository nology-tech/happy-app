import React from "react";
import { Router } from "@reach/router";

import About from "../About";
import AccountSettings from "../AccountSettings";
import Home from "../Home";
import Login from "../Login";
import Register from "../Register";
import Scores from "../Scores";
import Task from "../Task";
import TermsConditions from "../TermsConditions";
import InitialScorePage from "../InitialScorePage";

const Routes = (props) => {
  const { signIn } = props;

  return (
    <Router>
      <About path="about" />
      <AccountSettings path="accountsettings" />
      <Home path="/" />
      <Login path="login" signIn={signIn} />
      <Register path="register" />
      <Scores path="scores" />
      <Task path="task" />
      <TermsConditions path="termsconditions" />
      <InitialScorePage path="setscores" />
    </Router>
  );
};

export default Routes;
