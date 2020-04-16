import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/AboutUs/AboutUs";
import PrivateService from "./components/PrivateService/PrivateService";
import OrganizationalService from "./components/OrganizationalService/OrganizationalService";
import NationalService from "./components/NationalService/NationalService";

function App() {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route path="/" exact component={AboutUs} />
        <Route path="/service/private" exact component={PrivateService} />
        <Route
          path="/service/organizational"
          exat
          component={OrganizationalService}
        />
        <Route path="/service/national" exact component={NationalService} />
      </Switch>
    </Router>
  );
}

export default App;
