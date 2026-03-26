import { Observer } from '../types/interfaces/Observer';
import { DisplayElement } from '../types/interfaces/DisplayElement';
import { WeatherData } from '../subjects/WeatherData';

export class ForecastDisplay implements Observer, DisplayElement {
  private currentPressure: number;
  private lastPressure: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.currentPressure = 29.92;
    this.lastPressure = 0;
    this.weatherData = weatherData;
    this.weatherData.on('update', this.update.bind(this));
  }

  public update(): void {
    // PULL model
    this.lastPressure = this.currentPressure;
    this.currentPressure = this.weatherData.getPressure();
    this.display();
  }

  public display(): void {
    let forecast = "Forecast: ";
    if (this.currentPressure > this.lastPressure) {
      forecast += "Improving weather on the way!";
    } else if (this.currentPressure === this.lastPressure) {
      forecast += "More of the same";
    } else if (this.currentPressure < this.lastPressure) {
      forecast += "Watch out for cooler, rainy weather";
    }
    console.log(forecast);
  }
}
