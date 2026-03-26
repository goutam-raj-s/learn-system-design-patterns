import { Subject } from '../types/interfaces/Subject';
import { Observer } from '../types/interfaces/Observer';

export class WeatherData implements Subject {
  private observers: Observer[];
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.observers = [];
    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
  }

  public registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  public removeObserver(o: Observer): void {
    const i = this.observers.indexOf(o);
    if (i >= 0) {
      this.observers.splice(i, 1);
    }
  }

  public notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  public measurementsChanged(): void {
    this.notifyObservers();
  }

  public setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }

  public getTemperature(): number {
    return this.temperature;
  }

  public getHumidity(): number {
    return this.humidity;
  }

  public getPressure(): number {
    return this.pressure;
  }
}
