import React, { Component } from "react";
import Home from "./HomeComponent";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import { APPINFO } from "../shared/applicationInfo";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appInfo: APPINFO
    };
  }

  render() {
    const HomePage = () => {
      return <Home appInfo={this.state.appInfo} />;
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default MainComponent;
