import React, { Component } from "react";
import Home from "./components/pages/Home";
import Staff from "./components/pages/Staff";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";
import Login from './components/auth/Login';

const onAuthRequired = ({ history }) => {
  history.push("/login");
};

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-361694.oktapreview.com/oauth2/default"
          client_id="0oafhm4eyc39A3ArJ0h7"
          redirect_uri={window.location.origin + "/implicit/callback"}
          onAuthRequired={onAuthRequired}
        >
          <div className="App">
            <Navbar />
            <div className="container">
              <Route path="/" exact={true} component={Home} />
              <SecureRoute path="/staff" exact={true} component={Staff} />
              <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-361694.oktapreview.com" />
                )}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
