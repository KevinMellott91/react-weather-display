'use strict';

const React = require('react');

class WeatherDisplay extends React.Component {
  getStyles() {
    return {
      test: {
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none'
      }
    };
  }

  getForecastImage() {
    switch (this.props.currentCondition) {
      case 'sunny':
        return 'https://raw.githubusercontent.com/KevinMellott91/react-weather-display/master/images/sunny.png';
      case 'cloudy':
        return 'https://raw.githubusercontent.com/KevinMellott91/react-weather-display/master/images/cloudy.png';
      case 'rainy':
        return 'https://raw.githubusercontent.com/KevinMellott91/react-weather-display/master/images/rain.png';
      case 'stormy':
        return 'https://raw.githubusercontent.com/KevinMellott91/react-weather-display/master/images/tstorms.png';
      case 'snowy':
        return 'https://raw.githubusercontent.com/KevinMellott91/react-weather-display/master/images/snow.png';
      default:
        return 'https://raw.githubusercontent.com/KevinMellott91/react-weather-display/master/images/mostlysunny.png';
    }
  }

  render() {
    const width = this.props.width * 0.6;
    const fontsize = width * 0.25;
    // Piece it all together to form the weather display.
    return React.createElement(
      'div',
      { style: {
          width: this.props.width,
          height: this.props.height,
          position: 'relative'
        }
      },
      React.createElement('img', { id: 'weatherImage', src: this.getForecastImage(), style: {
          width,
          height: width,
          position: 'absolute',
          left: (this.props.width - width) / 2,
          top: (this.props.height - width) / 2
        }
      }),
      React.createElement(
        'h1',
        { id: 'weatherValue', style: {
            width,
            fontSize: fontsize,
            position: 'absolute',
            top: (this.props.height - fontsize) / 2,
            left: (this.props.width - width) / 2,
            margin: '0 0 0 0',
            textAlign: 'center',
            textShadow: `${ fontsize * 0.05 }px ${ fontsize * 0.05 }px #111111`,
            color: 'white'
          }
        },
        this.props.currentTemperature,
        '\u00B0'
      )
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
  currentCondition: React.PropTypes.oneOf(['sunny', 'cloudy', 'rainy', 'stormy', 'snowy'])
};

WeatherDisplay.defaultProps = {
  width: 1280,
  height: 720,
  currentTemperature: 70,
  currentCondition: 'sunny'
};

module.exports = WeatherDisplay;
