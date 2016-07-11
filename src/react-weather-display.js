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
      weatherSprite: {
        backgroundImage: 'url(https://raw.githubusercontent.com/KevinMellott91/react-weather-display/master/weather-sprite.png)',
      },
      spriteWeatherSunny: {
        width: '125px',
        height: '125px',
        backgroundPosition: '-15px -15px',
      },
      spriteWeatherCloudy: {
        width: '155px',
        height: '100px',
        backgroundPosition: '-150px -20px',
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
    const width = this.props.width * 0.6;
    console.log(width);
    // Piece it all together to form the weather display.
    return (
      <div style={{
        width: this.props.width,
        height: this.props.height,
        position: 'relative',
        margin: 'auto',
      }}
      >
        <h1 id="weatherValue">{this.props.currentTemperature}</h1>
        <div style= {{
          backgroundImage: 'url(https://raw.githubusercontent.com/KevinMellott91/react-weather-display/master/weather-sprite.png)',
          width: '300px',
          height: '300px',
          backgroundPosition: '0px 0px',
        }}
        >
        </div>
        <img id="weatherImage" src={this.getForecastImage()} style={{
          width,
          height: width,
          position: 'absolute',
          left: (this.props.width - width) / 2,
          top: (this.props.height - width) / 2,
        }}
        />
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
