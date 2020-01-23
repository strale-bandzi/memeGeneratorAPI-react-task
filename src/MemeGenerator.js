import React from "react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/lbij.jpg",
      allMeme: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMeme: memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMeme.length);
    const randMeme = this.state.allMeme[randNum].url;
    this.setState({ randomImg: randMeme });
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="Top text"
            value={this.state.topText}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="bottomText"
            placeholder="Bottom text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />

          <button>Gen</button>
        </form>

        <div className="meme">
          <h2 className="top">{this.state.topText}</h2>
          <img src={this.state.randomImg} alt="" />
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
