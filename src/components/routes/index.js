import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "../contact";
import DetermineRootArea from "../determineRootArea";
import Home from "../home";
import MainPage from "../main";
import MoreOption from "../moreOption";
import RootArea from "../rootArea";
import SolarSavings from "../solarSaving";
import Steper from "../steper";
import SteperFooter from "../steperFooter";
import ThankyouRequest from "../thankyouRequest";
import Datenschutzerklaerung from "./datenschutzerklaerung";
import Impressum from "./impressum";

function RouteWrapper({ component: Component, layout: Layout, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
const DefaultLayout = ({ children, match }) => (
  <>
    <Steper />
    <div className="childern-steper-content-load">{children}</div>
    <SteperFooter />
  </>
);
const ContentLayout = ({ children, match }) => <>{children}</>;
export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <RouteWrapper
            exact={true}
            path="/"
            component={MainPage}
            layout={DefaultLayout}
          />
          <RouteWrapper
            exact={true}
            path="/datenschutzerklaerung"
            component={Datenschutzerklaerung}
            layout={ContentLayout}
          />
          <RouteWrapper
            exact={true}
            path="/impressum"
            component={Impressum}
            layout={ContentLayout}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}
