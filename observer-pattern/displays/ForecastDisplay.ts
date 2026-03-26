import { Observer } from '../types/interfaces/Observer';
import { DisplayElement } from '../types/interfaces/DisplayElement';
import { Subject } from '../types/interfaces/Subject';

export class ForecastDisplay implements Observer, DisplayElement {
  private currentPressure: number;
  private lastPressure: number;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.currentPressure = 29.92;
    this.lastPressure = 0;
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  public update(temp: number, humidity: number, pressure: number): void {
    this.lastPressure = this.currentPressure;
    this.currentPressure = pressure;
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
