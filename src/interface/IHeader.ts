import { IWeatherQuery } from "./weather";

export interface IHeader {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value: string;
  search?: Array<IWeatherQuery>;
}
