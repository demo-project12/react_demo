import React, { Component } from "react";
import Home from "./pages/Home";
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
        <Route path="/" component={Home} exact />
    )
  }
}

export default App;
