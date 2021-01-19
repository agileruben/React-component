import React from "react";
import Button from "./components/button/button";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waterCapacitor: [],
    };
    this.intervalId = 0;
    this.delay = 2000;
  }

  componentWillUnmount() {
    this.intervalId && clearInterval(this.intervalId);
  }

  water(index) {
    return <div className="water" key={index} />;
  }

  increaseWaterLevel = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      if (this.state.waterCapacitor.length < 5) {
        this.setState({
          waterCapacitor: [
            ...this.state.waterCapacitor,
            this.water(this.state.waterCapacitor.length),
          ],
        });
      } else {
        clearInterval(this.intervalId);
      }
    }, this.delay);
  };

  decreaseWaterLevel = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      if (this.state.waterCapacitor.length > 0) {
        this.setState({
          waterCapacitor: this.state.waterCapacitor.slice(
            0,
            this.state.waterCapacitor.length - 1
          ),
        });
      } else {
        clearInterval(this.intervalId);
      }
    }, this.delay);
  };

  render() {
    return (
      <div className="app-container m-standard">
        <h3>
          Water level:{" "}
          <span style={{ color: "red" }}>
            {this.state.waterCapacitor.length || 0}
          </span>
        </h3>
        <div className="table w-100">
          <div className="tank w-50 table-cell">
            {this.state.waterCapacitor || ""}
          </div>
          <div className="button-container table-cell">
            <Button text={"+"} onClick={this.increaseWaterLevel} />
            <Button text={"-"} onClick={this.decreaseWaterLevel} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
