import React, { Component } from 'react'
import PropTypes from 'prop-types'

const getDefaultConditions = conditions => ({
  sunny:   'https://raw.githubusercontent.com/KevinMellott91/react-weather-display/master/images/sunny.png',
  cloudy:  'https://raw.githubusercontent.com/KevinMellott91/react-weather-display/master/images/cloudy.png',
  rainy:   'https://raw.githubusercontent.com/KevinMellott91/react-weather-display/master/images/rain.png',
  stormy:  'https://raw.githubusercontent.com/KevinMellott91/react-weather-display/master/images/tstorms.png',
  snow:    'https://raw.githubusercontent.com/KevinMellott91/react-weather-display/master/images/snow.png',
  default: 'https://raw.githubusercontent.com/KevinMellott91/react-weather-display/master/images/mostlysunny.png',
  ...conditions
})

class ReactWeatherDisplay extends Component {

  constructor(props, context) {
    super(props, context)
    this.conditions = getDefaultConditions(props.conditions)
  }

  getForecastImage = () =>
    this.conditions[this.props.currentCondition] || this.conditions.default

  render() {
    const { textShadow } = this.props

    const width    = this.props.width * 0.6;
    const fontSize = width * 0.25;

    const flexCentered = {
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'center',
    }

    const wrapperStyle = {
      position:       'relative',
      width:          this.props.width,
      height:         this.props.height,
      ...flexCentered
    }

    const absolutelyFilled = {
      position: 'absolute',
      top:    0,
      bottom: 0,
      left:   0,
      right:  0,
    }

    const weatherContainerStyle = {
      ...absolutelyFilled,
      backgroundImage:    `url(${this.getForecastImage()})`,
      backgroundPosition: 'center',
      backgroundRepeat:   'no-repeat',
      backgroundSize:     'contain',
      zIndex: 1,
    }

    const containerStyle = {
      ...absolutelyFilled,
      textShadow,
      fontSize,
      fontWeight: 'bold',
      textAlign:  'center',
      color:      'white',
      zIndex:     2,
      ...flexCentered
    }

    return (
      <div style={wrapperStyle}>
        <div style={weatherContainerStyle} />
        <div style={containerStyle}>
          {this.props.currentTemperature}{'\u00B0'}
        </div>
      </div>
    )
  }
}

ReactWeatherDisplay.propTypes = {
  /* Width of component in pixels */
  width: PropTypes.number,
  /* Height of component in pixels */
  height: PropTypes.number,
  /* Actual temperature detected for the location */
  currentTemperature: PropTypes.number,
  /* The forcast to display */
  currentCondition: PropTypes.oneOf(['sunny', 'cloudy', 'rainy', 'stormy', 'snowy']),
}

ReactWeatherDisplay.defaultProps = {
  width:  '100%',
  height: '100%',
  currentTemperature: 0,
  currentCondition:   'default',
  textShadow: '1px 1px 2px rgba(50,50,50,0.8)'
}

export default ReactWeatherDisplay