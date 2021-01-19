import React from "react";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waterCapacitor: [],
    };
    this.intervalId = 0;
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
    }, 2000);
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
    }, 2000);
  };

  render() {
    return (
      <div className="app-container">
        <div className="water-level-display-container">
          <h3>{this.state.waterCapacitor.length || 0}</h3>
        </div>
        <div className="button-container">
          <button className="button fixed-w" onClick={this.increaseWaterLevel}>
            +
          </button>
          <button className="button fixed-w" onClick={this.decreaseWaterLevel}>
            -
          </button>
        </div>
        <div className="tank fixed-w">{this.state.waterCapacitor}</div>
      </div>
    );
  }
}

export default App;
