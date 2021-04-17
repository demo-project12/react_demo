import React, { Component } from "react";
import Home from "./pages/Home";
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Route path="/" component={Home} exact />
    )
  }
}

export default App;
