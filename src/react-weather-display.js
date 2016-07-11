'use strict';

const React = require('react');

class WeatherDisplay extends React.Component {
  getStyles() {
    return {
      test: {
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
      },
    };
  }

  getForecastImage() {
    switch (this.props.currentCondition) {
      case 'sunny':
        return 'http://images.clipartpanda.com/sun-clip-art-clipart-decorative-sun-256x256-b685.png';
      case 'cloudy':
        return 'http://icons.veryicon.com/ico/Nature/Weather/Cloudy.ico';
      case 'rainy':
        return 'http://res.freestockphotos.biz/pictures/15/15144-illustration-of-a-stormy-cloud-with-heavy-rain-pv.png';
      case 'stormy':
        return 'http://cliparts.co/cliparts/ATb/Kqn/ATbKqn7ac.png';
      default:
        return 'http://icons.veryicon.com/ico/Nature/Weather/Cloudy.ico';
    }
  }

  render() {
    // Piece it all together to form the weather display.
    return (
      <div>
        <h1 id="weatherValue">{this.props.currentTemperature}</h1>
        <img id="weatherImage" src={this.getForecastImage()} />
      </div>
    );
  }
}

WeatherDisplay.propTypes = {
  /* Width of component in pixels */
  width: React.PropTypes.number,
  /* Height of component in pixels */
  height: React.PropTypes.number,
  /* Actual temperature detected for the location */
  currentTemperature: React.PropTypes.number,
  /* The forcast to display */
  currentCondition: React.PropTypes.oneOf(['sunny', 'cloudy', 'rainy', 'stormy']),
};

WeatherDisplay.defaultProps = {
  width: 1280,
  height: 720,
  currentTemperature: 70,
  currentCondition: 'sunny',
};

module.exports = WeatherDisplay;
