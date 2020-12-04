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
import ScoreDisplay from "../ScoreDisplay"

const Routes = (props) => {
  const { user } = props;

  return (
   <Router>
      <About path="about" />
      <AccountSettings path="accountsettings" />
      <Home path="/" />
      <Login path="login" />
      <Register path="register" />
      <Scores path="scores" />
      <ScoreDisplay path="scoreDisplay" user={user} />
      <Task path="task" />
      <TermsConditions path="termsconditions" />
   </Router>
  );
};

export default Routes;
