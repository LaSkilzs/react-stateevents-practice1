import React from "react";

class DogCard extends React.Component {
  constructor() {
    super();
    this.state = {
      speak: "",
      showSpeak: false
    };
  }

  handleSpeak = () => {
    this.setState({
      showSpeak: !this.state.showSpeak,
      speak: "Ruff"
    });
  };

  render() {
    const { handleFavorites, removeFavorites, parent } = this.props;

    if (parent === "dogs") {
      return (
        <div>
          <h2>{this.props.dog.name}</h2>
          <img alt="" src={this.props.dog.img} />
          <button onClick={this.handleSpeak}>Bark</button>
          <button onClick={() => handleFavorites(this.props.dog)}>
            favorite/unfavorite
          </button>
          {this.state.showSpeak ? <span>{this.state.speak}</span> : null}
        </div>
      );
    } else if (parent === "favs") {
      return (
        <div>
          <h2>{this.props.dog.name}</h2>
          <img alt="" src={this.props.dog.img} />
          <button onClick={this.handleSpeak}>Bark</button>
          <button onClick={() => removeFavorites(this.props.dog)}>
            favorite/unfavorite
          </button>
          {this.state.showSpeak ? <span>{this.state.speak}</span> : null}
        </div>
      );
    }
  }
}

export default DogCard;
