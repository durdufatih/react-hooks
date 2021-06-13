import React from "react";

export class ClassUseEffectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quote: "", character: "", image: "" };
  }
  async fetchData() {
    const response = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    );
    const data = await response.json();
    this.setState(
      {
        character: data[0].character,
        quote: data[0].quote,
        image: data[0].image,
      },
    );
  }
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <div>
        <div>Class Use Effect</div>
        <div>Quote: {this.state.quote}</div>
        <div>character:{this.state.character}</div>
        <div>
          <img src={this.state.image} alt="Character" height={100} width={70}></img>
        </div>
      </div>
    );
  }
}
