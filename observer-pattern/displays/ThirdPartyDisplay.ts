import { Observer } from '../types/interfaces/Observer';
import { DisplayElement } from '../types/interfaces/DisplayElement';
import { WeatherData } from '../subjects/WeatherData';

export class ThirdPartyDisplay implements Observer, DisplayElement {
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.on('update', this.update.bind(this));
  }

  public update(): void {
    // Custom third party logic interacting with this.weatherData 
    this.display();
  }

  public display(): void {
    console.log("Third Party Display: custom display logic here.");
  }
}
