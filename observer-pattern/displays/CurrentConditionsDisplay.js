import { Observer } from '../interfaces/Observer.js';
import { DisplayElement } from '../interfaces/DisplayElement.js';

/**
 * @implements {DisplayElement}
 */
export class CurrentConditionsDisplay extends Observer {
  constructor(weatherData) {
    super();
    this.temperature = 0;
    this.humidity = 0;
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update(temperature, humidity, pressure) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  display() {
    console.log(`Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`);
  }
}
