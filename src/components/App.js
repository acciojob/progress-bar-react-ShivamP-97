import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      percent: 0,
      width: 0
    };
    this.widths = [0, 12.5, 25, 37.5, 50, 62.5, 75, 87.5, 100, 112.5, 125, 137.5, 150];
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prev) => {
        if (prev.step >= 10) {
          clearInterval(this.interval);
          return prev;
        }
        const nextStep = prev.step + 1;
        return {
          step: nextStep,
          percent: nextStep * 10,
          width: this.widths[nextStep]
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
        <p>{this.state.percent}%</p>

        <div
          id="barOuter"
          style={{
            width: "150px",
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
