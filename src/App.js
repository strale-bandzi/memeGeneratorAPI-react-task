import React from "react";

import MemeGenerator from "./MemeGenerator";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Some kind of text</h1>
        <Header />
        <MemeGenerator />
      </div>
    );
  }
}

export default App;
