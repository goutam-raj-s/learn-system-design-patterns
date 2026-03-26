import { Observer } from '../types/interfaces/Observer';
import { DisplayElement } from '../types/interfaces/DisplayElement';
import { Subject } from '../types/interfaces/Subject';

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: number;
  private humidity: number;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.temperature = 0;
    this.humidity = 0;
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  public update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  public display(): void {
    console.log(`Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`);
  }
}
