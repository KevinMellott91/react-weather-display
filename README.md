## React Weather Display
This React component provides a basic display of weather information, similar
to something that you might see on a weather forecast.

### Live Demo
View the [live demo](https://run.plnkr.co/plunks/c752wk/)! Note that this demo uses pre-compiled code, so it's a little messy to examine.

### Installation
```
npm install react-weather-display
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
