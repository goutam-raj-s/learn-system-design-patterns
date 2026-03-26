import { Observer } from '../types/interfaces/Observer';
import { DisplayElement } from '../types/interfaces/DisplayElement';
import { WeatherData } from '../subjects/WeatherData';

export class StatisticsDisplay implements Observer, DisplayElement {
  private maxTemp: number;
  private minTemp: number;
  private tempSum: number;
  private numReadings: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.maxTemp = 0.0;
    this.minTemp = 200;
    this.tempSum = 0.0;
    this.numReadings = 0;
    this.weatherData = weatherData;
    this.weatherData.on('update', this.update.bind(this));
  }

  public update(): void {
    // PULL model
    const temp = this.weatherData.getTemperature();
    this.tempSum += temp;
    this.numReadings++;
    if (temp > this.maxTemp) {
      this.maxTemp = temp;
    }
    if (temp < this.minTemp) {
      this.minTemp = temp;
    }
    this.display();
  }

  public display(): void {
    console.log(`Avg/Max/Min temperature = ${(this.tempSum / this.numReadings).toFixed(1)}/${this.maxTemp}/${this.minTemp}`);
  }
}

