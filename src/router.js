import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home/Home";
import ShelfA from "./components/home/shelfA";
import ShelfB from "./components/home/shelfB";
import ShelfC from "./components/home/shelfC";
import ShelfD from "./components/home/shelfD";
import Bin1 from "./components/bins/Bin1";
import Bin2 from "./components/bins/Bin2";
import Bin3 from "./components/bins/Bin3";
import Bin4 from "./components/bins/Bin4";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route
      path="/shelfa"
      render={() => {
        return (
          <ShelfA>
            <Route component={Bin1} path="/Bin1" />
            <Route component={Bin2} path="/Bin2" />
            <Route component={Bin3} path="/Bin3" />
            <Route component={Bin4} path="/Bin4" />
          </ShelfA>
        );
      }}
    />
    <Route
      path="/shelfb"
      render={() => {
        return (
          <ShelfB>
            <Route component={Bin1} path="/Bin1" />
            <Route component={Bin2} path="/Bin2" />
            <Route component={Bin3} path="/Bin3" />
            <Route component={Bin4} path="/Bin4" />
          </ShelfB>
        );
      }}
    />
    <Route
      path="/shelfc"
      render={() => {
        return (
          <ShelfC>
            <Route component={Bin1} path="/Bin1" />
            <Route component={Bin2} path="/Bin2" />
            <Route component={Bin3} path="/Bin3" />
            <Route component={Bin4} path="/Bin4" />
          </ShelfC>
        );
      }}
    />
    <Route
      path="/shelfd"
      render={() => {
        return (
          <ShelfD>
            <Route component={Bin1} path="/Bin1" />
            <Route component={Bin2} path="/Bin2" />
            <Route component={Bin3} path="/Bin3" />
            <Route component={Bin4} path="/Bin4" />
          </ShelfD>
        );
      }}
    />
  </Switch>
);
