import { EventEmitter } from 'events';

export class WeatherData extends EventEmitter {
  private temperature: number;
  private humidity: number;
  private pressure: number;
  private changed: boolean;

  constructor() {
    super();
    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
    this.changed = false;
  }

  protected setChanged(): void {
    this.changed = true;
  }

  public notifyObservers(): void {
    if (this.changed) {
      // PULL Model: We emit the 'update' event. Node's EventEmitter handles the list of listeners natively!
      this.emit('update');
      this.changed = false;
    }
  }

  public measurementsChanged(): void {
    this.setChanged();
    this.notifyObservers();
  }

  public setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }

  public getTemperature(): number {
    return this.temperature; // Observers will PULL this
  }

  public getHumidity(): number {
    return this.humidity; // Observers will PULL this
  }

  public getPressure(): number {
    return this.pressure; // Observers will PULL this
  }
}

