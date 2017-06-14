## React Weather Display
This React component provides a basic display of weather information, similar
to something that you might see on a weather forecast.

### Live Demo
View the [live demo](https://run.plnkr.co/plunks/c752wk/)! Note that this demo uses pre-compiled code, so it's a little messy to examine.

### Installation
```
npm install react-weather-display
```

### Props

 - **width**       - Set the width of the wrapper div.   Defaults to 100%.
 - **height**      - Set the height of the wrapper div.  Defaults to 100%.
 - **temperature** - The temperature to display
 - **condition**   - The condition to display (PropTypes.oneOf(['sunny', 'cloudy', 'rainy', 'stormy', 'snowy']))
 - **conditions**  - Optionally overwrite the available conditions and the image they will use.
 - **opacity**     - The value to use for the wrapper opacity when isVisible is true.
 - **isVisible**   - Sets the wrapper div to opacity to this.props.opacity or 0.
 - **transition**  - Optionally override the transition used on the wrapper div.
 - **textShadow**  - Optionally override the textShadow property on the temperature.  Defaults to "1px 1px 1px rgba(50,50,50,0.8)"

> currentTemperature and currentCondition are also supported for backwards compatibility with the
> original version of the package.

### Conditions

While you can overwrite the conditions that are available, the default conditions are setup as shown below.  The function is ran
during construction or if the `conditions` prop is updated.  The backgroundImage prop will wrap the given value with
`url()` if the value is an URL and is not already wrapped.

```js
const getDefaultConditions = conditions => ({
  sunny:   'https://raw.githubusercontent.com/KevinMellott91/react-weather-display/master/images/sunny.png',
  cloudy:  'https://raw.githubusercontent.com/KevinMellott91/react-weather-display/master/images/cloudy.png',
  rainy:   'https://raw.githubusercontent.com/KevinMellott91/react-weather-display/master/images/rain.png',
  stormy:  'https://raw.githubusercontent.com/KevinMellott91/react-weather-display/master/images/tstorms.png',
  snow:    'https://raw.githubusercontent.com/KevinMellott91/react-weather-display/master/images/snow.png',
  default: 'https://raw.githubusercontent.com/KevinMellott91/react-weather-display/master/images/mostlysunny.png',
  ...conditions
})
```

### Example Usage
You can run built-in demo example via few simple steps:<br />
1. `git clone https://github.com/KevinMellott91/react-weather-display.git`<br />
2. `cd react-weather-display`<br />
3. `npm install`<br />
4. `npm run-script basic-example`<br />
5. Browse to http://localhost:3000

### Component properties
- `width` (Integer) - the desired width of the component in pixels
- `height` (Integer) - the desired height of the component in pixels
- `currentTemperature` (Integer) - actual temperature detected for the location
- `currentCondition` (Enum) - actual current weather condition detected for the location
  - sunny, cloudy, rainy, stormy, snowy

### Inspiration
The [weather condition images](http://jaan-jaak.deviantart.com/art/Weather-Icon-Set-331363831) were originally created by [Jean-Jacques Rossouw](http://jaan-jaak.deviantart.com/), and we were inspired to incorporate them into this control.
