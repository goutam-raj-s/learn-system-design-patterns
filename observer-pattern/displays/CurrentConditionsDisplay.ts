import { Observer } from '../types/interfaces/Observer';
import { DisplayElement } from '../types/interfaces/DisplayElement';
import { WeatherData } from '../subjects/WeatherData';

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: number;
  private humidity: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.temperature = 0;
    this.humidity = 0;
    this.weatherData = weatherData;
    this.weatherData.on('update', this.update.bind(this));
  }

  public update(): void {
    // PULL model: taking the exact values needed from the passed reference
    this.temperature = this.weatherData.getTemperature();
    this.humidity = this.weatherData.getHumidity();
    this.display();
  }

  public display(): void {
    console.log(`Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`);
  }
}

