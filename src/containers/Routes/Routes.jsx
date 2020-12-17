import React from "react";
import { Router } from "@reach/router";

import About from "../About";
import AccountSettings from "../AccountSettings";
import Login from "../Login";
import Register from "../Register";
import Task from "../Task";
import TermsConditions from "../TermsConditions";
import InitialScorePage from "../InitialScorePage";
import HappinessGraphPage from "../HappinessGraphPage";
import PrivateRoutes from "../../containers/PrivateRoutes";
import ScoreDisplay from "../ScoreDisplay";
import CareerDeepDive from "../../containers/CareerDeepDive";

const Routes = (props) => {
  const { signIn, user, signOut } = props;
  const isScoreDisplay = false;

  return (
    <Router>
      
      <About path="about" signOut={signOut}/>
      <Login path="/" signIn={signIn} />
      <Register path="register"signOut={signOut} />
      <PrivateRoutes path="/">
        <Task user={user} path="task" signOut={signOut}/>
        <InitialScorePage  user={user} path="setscores" signOut={signOut}/>
        <HappinessGraphPage path="happinessgraph" signOut={signOut} />
        <CareerDeepDive path="careerdeepdive"/>
        <AccountSettings path="accountsettings" signOut={signOut} />
        <ScoreDisplay user={user} path="scoredisplay" isScoreDisplay={isScoreDisplay} signOut={signOut} />
      </PrivateRoutes>
      <TermsConditions path="termsconditions" signOut={signOut}/>
    </Router>
  );
};

export default Routes;
