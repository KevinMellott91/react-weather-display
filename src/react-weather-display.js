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

const textStyles = {
  fontWeight: 'bold',
  textAlign:  'center',
  color:      'white',
  zIndex:     2,
}

const flexCentered = {
  display:        'flex',
  alignItems:     'center',
  justifyContent: 'center',
}

const backgroundImageStyles = {
  backgroundPosition: 'center',
  backgroundRepeat:   'no-repeat',
  backgroundSize:     'contain',
}

const absolutelyFilled = {
  position: 'absolute',
  top:    0,
  bottom: 0,
  left:   0,
  right:  0,
  zIndex: 1,
}

class ReactWeatherDisplay extends Component {

  constructor(props, context) {
    super(props, context)
    this.conditions = getDefaultConditions(props.conditions)
  }

  componentWillReceiveProps(np) {
    if ( this.props.conditions !== np.conditions ) {
      this.conditions = getDefaultConditions(np.conditions)
    }
  }

  getCurrentCondition = () =>
    this.props.condition || this.props.currentCondition

  getForecastImage = () => {
    const condition = this.conditions[this.getCurrentCondition()] || this.conditions.default
    if ( condition.startsWith('http') ) {
      return `url(${condition})`
    } else {
      return condition
    }
  }

  getCurrentTemperature = () =>
    this.props.temperature || this.props.currentTemperature

  render() {
    const { textShadow } = this.props

    const width    = this.props.width * 0.6;
    const fontSize = width * 0.25;

    const wrapperStyle = {
      position:       'relative',
      width:          this.props.width,
      height:         this.props.height,
      opacity:        this.props.isVisible ? this.props.opacity : 0,
      transition:     this.props.transition,
      ...flexCentered,
      ...this.props.wrapperStyle,
    }

    const weatherContainerStyle = {
      backgroundImage: this.getForecastImage(),
      ...absolutelyFilled,
      ...backgroundImageStyles,
      ...this.props.conditionStyle,
    }

    const containerStyle = {
      textShadow,
      fontSize,
      ...absolutelyFilled,
      ...textStyles,
      ...flexCentered,
      ...this.props.temperatureStyle,
    }

    return (
      <div style={wrapperStyle}>
        <div style={weatherContainerStyle} />
        <div style={containerStyle}>
          {this.getCurrentTemperature()}{'\u00B0'}
        </div>
      </div>
    )
  }
}

ReactWeatherDisplay.propTypes = {
  /* Width of component in pixels */
  width: PropTypes.any,
  /* Height of component in pixels */
  height: PropTypes.any,
  isVisible: PropTypes.bool,
  transition: PropTypes.string,
  opacity: PropTypes.number,
  /* Actual temperature detected for the location */
  currentTemperature: PropTypes.number,
  temperature: PropTypes.number,
  /* The forcast to display */
  currentCondition: PropTypes.oneOf(['sunny', 'cloudy', 'rainy', 'stormy', 'snowy']),
  condition: PropTypes.oneOf(['sunny', 'cloudy', 'rainy', 'stormy', 'snowy']),
  temperatureStyle: PropTypes.object,
  wrapperStyle:     PropTypes.object,
  conditionStyle:   PropTypes.object,
}

ReactWeatherDisplay.defaultProps = {
  width:  '100%',
  height: '100%',
  temperature: 0,
  opacity:     1,
  isVisible:   true,
  condition:   'default',
  textShadow: '1px 1px 2px rgba(50,50,50,0.8)',
  transition: 'opacity 0.5s ease',
}

export default ReactWeatherDisplay