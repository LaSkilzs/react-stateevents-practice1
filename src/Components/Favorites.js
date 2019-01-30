import React from "react";
import DogCard from "./DogCard";

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      parent: "favs"
    };
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1>Favorite Dogs</h1>
          {this.props.favorites.map(dog => (
            <DogCard
              key={dog.id}
              dog={dog}
              removeFavorites={this.props.removeFavorites}
              parent={this.state.parent}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Favorites;
