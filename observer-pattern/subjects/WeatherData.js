import { Subject } from '../interfaces/Subject.js';

export class WeatherData extends Subject {
  constructor() {
    super();
    this.observers = [];
    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
  }

  registerObserver(o) {
    this.observers.push(o);
  }

  removeObserver(o) {
    const i = this.observers.indexOf(o);
    if (i >= 0) {
      this.observers.splice(i, 1);
    }
  }

  notifyObservers() {
    for (let observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  measurementsChanged() {
    this.notifyObservers();
  }

  setMeasurements(temperature, humidity, pressure) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }

  getTemperature() {
    return this.temperature;
  }

  getHumidity() {
    return this.humidity;
  }

  getPressure() {
    return this.pressure;
  }
}

