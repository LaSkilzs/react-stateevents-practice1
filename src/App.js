import React, { Component } from "react";
import "./App.css";
import DogsList from "./Containers/DogsList";
import dogs from "./dogs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogs
    };
  }
  render() {
    return <DogsList dogs={dogs} />;
  }
}

export default App;
