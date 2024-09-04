export interface IWeather {
  location: { name: string; localtime: string };
  current: {
    temp_c: number;
    temp_f: number;
    condition: { text: string; icon: string; code: number };
    wind_kph: number;
    wind_mph: number;
    humidity: number;
    cloud: number;
  };
}

export interface IWeatherQuery {
  country: string;
  name: string;
}
