'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const WeatherDisplay = require('../../dist/react-weather-display.js');

class App extends React.Component {
  constructor(props) {
    super(props);

    // Bind to the event handlers.
    this.handleForecastChange = this.handleForecastChange.bind(this);
    this.handleCurrentTemperatureChange = this.handleCurrentTemperatureChange.bind(this);

    // Set the initial state.
    this.state = {
      currentTemperature: 74,
      currentCondition: 'sunny',
    };
  }

  handleForecastChange(event) {
    this.setState({ currentCondition: event.target.value });
  }

  handleCurrentTemperatureChange(event) {
    this.setState({ currentTemperature: parseFloat(event.target.value) });
  }

  render() {
    return (
      <div>
        <h1 className="cover-heading space-after">react-weather-display</h1>
        <WeatherDisplay height="400px" width="400px"
          currentTemperature={this.state.currentTemperature}
          currentCondition={this.state.currentCondition}
        />
        <div className="row space-before">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="currentTemperature">Current Temperature</label>
              <input id="currentTemperature" type="range"
                defaultValue={this.state.currentTemperature}
                onChange={this.handleCurrentTemperatureChange}
              ></input>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="currentConditionPicker">condition</label>
              <select id="currentConditionPicker" className="selectpicker"
                onChange={this.handleForecastChange}
              >
                <option value="sunny">Sunny</option>
                <option value="cloudy">Cloudy</option>
                <option value="rainy">Rainy</option>
                <option value="stormy">Stormy</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Render the application in the reserved placeholder element.
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
