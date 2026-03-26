import { WeatherData } from './subjects/WeatherData';
import { CurrentConditionsDisplay } from './displays/CurrentConditionsDisplay';
import { StatisticsDisplay } from './displays/StatisticsDisplay';
import { ForecastDisplay } from './displays/ForecastDisplay';
import { ThirdPartyDisplay } from './displays/ThirdPartyDisplay';

console.log("Initializing Weather Station in Strict TypeScript...\n");
const weatherData = new WeatherData();

const currentDisplay = new CurrentConditionsDisplay(weatherData);
const statisticsDisplay = new StatisticsDisplay(weatherData);
const forecastDisplay = new ForecastDisplay(weatherData);
const thirdPartyDisplay = new ThirdPartyDisplay(weatherData);

console.log("--- First measurement change ---");
weatherData.setMeasurements(80, 65, 30.4);

console.log("\n--- Second measurement change ---");
weatherData.setMeasurements(82, 70, 29.2);

console.log("\n--- Third measurement change ---");
weatherData.setMeasurements(78, 90, 29.2);
