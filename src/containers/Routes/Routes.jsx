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

const Routes = (props) => {
  const { signIn, user, signOut } = props;

  return (
    <Router>
      <About path="about" signOut={signOut}/>
      <Login path="/" signIn={signIn} />
      <Register path="register"signOut={signOut} />
      <PrivateRoutes path="/">
        <Task path="task" signOut={signOut}/>
        <InitialScorePage path="setscores" signOut={signOut}/>
        <HappinessGraphPage path="happinessgraph" signOut={signOut} />
        <AccountSettings path="accountsettings"signOut={signOut} />
        <ScoreDisplay user={user} path="scoredisplay"signOut={signOut} />
      </PrivateRoutes>
      <TermsConditions path="termsconditions" signOut={signOut}/>
    </Router>
  );
};

export default Routes;
