import { IWeatherQuery } from "./weather";

export interface ISearchbar {
  className: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value: string;
  search?: Array<IWeatherQuery>;
}
