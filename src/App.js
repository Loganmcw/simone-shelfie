import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./components/home/Home";
import router from "./router";
class App extends Component {
  render() {
    return <main className="app">{router}</main>;
  }
}

export default App;
