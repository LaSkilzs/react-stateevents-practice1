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
    return (
      <div>
        <h2>{this.props.dog.name}</h2>
        <img alt="" src={this.props.dog.img} />
        <button onClick={this.handleSpeak}>Bark</button>
        {this.state.showSpeak ? <span>{this.state.speak}</span> : null}
      </div>
    );
  }
}

export default DogCard;
