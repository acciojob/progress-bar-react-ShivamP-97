import React, { Component } from "react";
import "./../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      text: "Progress started"
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.progress >= 100) {
          clearInterval(this.interval);
          return {
            progress: 100,
            text: "Operation completed"
          };
        }

        return {
          progress: prevState.progress + 10,
          text: `Progress: ${prevState.progress + 10}%`
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
        <p>{this.state.text}</p>

        {/* Progress bar */}
        <div
          id="barOuter"
          style={{
            width: "100px",
            height: "20px",
            border: "1px solid black"
          }}
        >
          <div
            id="barInner"
            style={{
              width: `${this.state.progress}px`,
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
