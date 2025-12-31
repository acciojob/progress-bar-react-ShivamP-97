import React, { Component } from "react";
import "./../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
      width: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prev) => {
        if (prev.percent >= 100) {
          clearInterval(this.interval);
          return prev;
        }

        return {
          percent: prev.percent + 10,
          width: prev.width + 12.5
        };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        {/* Progress text */}
        <p>{this.state.percent}%</p>

        {/* Progress bar */}
        <div
          id="barOuter"
          style={{
            width: "125px",
            height: "20px",
            border: "1px solid black"
          }}
        >
          <div
            id="barInner"
            style={{
              width: `${this.state.width}px`,
              height: "100%",
              backgroundColor: "green"
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
