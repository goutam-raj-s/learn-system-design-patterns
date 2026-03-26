import { Observer } from '../types/interfaces/Observer';
import { DisplayElement } from '../types/interfaces/DisplayElement';
import { Subject } from '../types/interfaces/Subject';

export class ThirdPartyDisplay implements Observer, DisplayElement {
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  public update(temp: number, humidity: number, pressure: number): void {
    // Implement custom third party logic here reacting directly to dispatch.
    this.display();
  }

  public display(): void {
    console.log("Third Party Display: custom display logic here.");
  }
}
