import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    useState = {
      count: 0,
    };
  }

  increment = () => {
    useState({ count: this.state.count + 1 });
  };

  decrement = () => {
    useState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.increment} className="counter">
          +
        </button>
        <button onClick={this.decrement} className="counter">
          -
        </button>

        <h2>{useState.count}</h2>
      </div>
    );
  }
}

export default App;
