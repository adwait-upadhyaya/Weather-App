import { config } from "../../config";
import { IWeather, IWeatherQuery } from "../interface/weather";
import axios from "axios";

const apiKey = config.api.weather;

export const fetchData = async (cityName: string): Promise<IWeather> => {
  try {
    const response = await axios.get<IWeather>(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`
    );
    return response.data;
  } catch (err: any) {
    throw new Error(
      err.response?.data?.error?.message || "Failed to fetch data"
    );
  }
};

export const fetchSearchData = async (
  query: string
): Promise<IWeatherQuery[]> => {
  try {
    const response = await axios.get<IWeatherQuery[]>(
      `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${query}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.error?.message || "Failed to fetch data"
    );
  }
};
