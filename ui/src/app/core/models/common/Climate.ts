export const MonthInWords = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export interface ILocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface ICondition {
  text: string;
  icon: string;
  code: number;
}

export interface ICurrent {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
  condition: ICondition;
}

export interface IClimateResponse {
  location: ILocation;
  current: ICurrent;
}

export class ClimateResponse implements IClimateResponse {
  location: ILocation;
  current: ICurrent;
  constructor(location: ILocation, current: ICurrent) {
    this.location = location;
    this.current = current;
  }
}

export interface IDateTime {
  day: string;
  dayInWord: string;
  month: number;
  monthInWord: string;
  year: number;
  hour: string;
  minute: string;
  second: string;
  period: string;
  date: string;
  time: string;
}

export class DateTime implements IDateTime {
  day: string = '-';
  dayInWord: string = '-';
  month: number = 0;
  monthInWord: string = '-';
  year: number = 0;
  hour: string = '-';
  minute: string = '-';
  second: string = '-';
  period: string = '-';
  date: string = '-';
  time: string = '-';
}

export interface IClimate {
  dateTime: IDateTime;
  temperatureC: number;
  temperatureF: number;
  weatherCondition: string;
  windMPH: number;
  windKPH: number;
  windDegree: number;
  windDirection: string;
  humidity: number;
  cloud: number;
  iconUrl: string;
  getTemperature(): string;
  getWeather(): string;
  getWind(): string;
  getHumidity(): string;
  getCloud(): string;
}

export class Climate implements IClimate {
  dateTime!: IDateTime;
  temperatureC: number = 0.0;
  temperatureF: number = 0.0;
  weatherCondition: string = '-';
  windMPH: number = 0;
  windKPH: number = 0;
  windDegree: number = 0;
  windDirection: string = '-';
  humidity: number = 0;
  cloud: number = 0;
  iconUrl: string = '-';
  getTemperature(): string {
    return (
      '&emsp;' +
      this.temperatureC +
      '&#176;&ensp;<sub>C</sub>&emsp;' +
      this.temperatureF +
      '&#176;&ensp;<sub>F</sub>'
    );
  }
  getWeather() {
    return this.weatherCondition;
  }
  getWind(): string {
    return (
      '&emsp;' +
      this.windMPH +
      '&ensp;<sub>MPH</sub>&emsp;' +
      this.windKPH +
      '&ensp;<sub>KPH</sub>&emsp;' +
      this.windDegree +
      '&ensp;<sub>Deg</sub>&emsp;' +
      this.windDirection +
      '&ensp;<sub>Dir</sub>&emsp;'
    );
  }
  getHumidity(): string {
    return this.humidity + '';
  }
  getCloud(): string {
    return this.cloud + '';
  }
}
