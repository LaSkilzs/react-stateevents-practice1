import React, { Component } from "react";
import DogCard from "../Components/DogCard";

class DogList extends Component {
  render() {
    const dog = this.props.dogs.map(dog => dog);

    return (
      <div className="dogContainer">
        {this.props.dogs.map(dog => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </div>
    );
  }
}

export default DogList;
