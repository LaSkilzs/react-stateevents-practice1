import React, { Component } from "react";
import "./App.css";
import DogsList from "./Containers/DogsList";
import dogs from "./dogs";
import Favorites from "./Components/Favorites";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogs,
      favorites: [],
      tempFavorites: []
    };
  }

  handleFavorites = dogObj => {
    let newArray = [...this.state.tempFavorites];
    newArray.push(dogObj);
    this.setState({ tempFavorites: newArray });
  };

  removeFavorites = dogObj => {
    let newArray = [...this.state.tempFavorites];
    newArray = newArray.filter(dog => dog !== dogObj);
    this.setState({ tempFavorites: newArray });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <DogsList dogs={dogs} handleFavorites={this.handleFavorites} />
          <Favorites
            favorites={this.state.tempFavorites}
            removeFavorites={this.removeFavorites}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
