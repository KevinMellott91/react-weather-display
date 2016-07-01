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

  render() {
    const _self = this;

    // The styles change based on state.
    const styles = this.getStyles();

    // Piece it all together to form the weather display.
    return React.createElement(
      'div',
      null,
      this.props.currentTemperature
    );
  }
}

WeatherDisplay.propTypes = {
  /* Actual temperature detected for the location */
  currentTemperature: React.PropTypes.number,
  /* Current state of operations within the thermostat */
  hvacMode: React.PropTypes.oneOf(['off', 'heating', 'cooling'])
};

WeatherDisplay.defaultProps = {
  currentTemperature: 74,
  hvacMode: 'off'
};

module.exports = WeatherDisplay;
