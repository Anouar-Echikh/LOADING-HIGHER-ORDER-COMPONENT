import React, { Component } from "react";
import "./App.css";
import SPINNER from "./spinner";
import MovieList from "./movie-list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  // this function (setTimeout) just for test
  t = setTimeout(() => {
    this.setState({ isLoading: false });
  }, 2000);
  /////////////////////
  render() {
    return (
      <div className="App">
        <MovieList isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default App;
