import React, { Component } from "react";
import DogCard from "../Components/DogCard";

class DogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parent: "dogs"
    };
  }
  render() {
    return (
      <div className="dogContainer">
        {this.props.dogs.map(dog => (
          <DogCard
            key={dog.id}
            dog={dog}
            handleFavorites={this.props.handleFavorites}
            parent={this.state.parent}
          />
        ))}
      </div>
    );
  }
}

export default DogList;
